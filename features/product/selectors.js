import { createSelector } from '@reduxjs/toolkit';

const selectActiveSKUId = state => state.product.page.activeSKUId;
const selectVariantMap = state => state.product.variantMap;
const selectProductVariantCategories = state => state.product.item.variantCategories;
export const selectSkus = state => state.product.item.skus;

export const selectCurrentSKU = createSelector(
    selectActiveSKUId,
    selectSkus,
    (activeSKUId, skus = []) => {
        return skus.find(sku => sku.skuId === activeSKUId)
    }
);


export const selectAvailableVariants = createSelector(
    selectSkus,
    selectProductVariantCategories,
    (skus = [], categories = []) => categories.reduce((catMap, cat) => ({
        ...catMap,
        [cat]: Array.from(skus.reduce(
            (variantSet,sku) => 
                variantSet.add(sku.variant[cat]) , new Set()
        ))
    }), {})
);