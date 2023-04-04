import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    page: {
        activeSKUId: '',
        selectedVariation: {},
    },
    item: {},
};

const preselectVariant = (product) => ({
    activeSKUId: product.skus[0].skuId,
    selectedVariation: product.skus[0].variant,
});

const findSKUFromVariant = (productItem, variant) => {
    return productItem.skus.find(sku => sku.variant.color === variant.color)
};

export const fetchProducts = createAsyncThunk(
    'product/loadProduct',
    async () => {
        try {
            const response = await fetch('http://localhost:3000/api/products');
            if (response.ok) {
                const product = await response.json();
                return product;
            }
            return {};
        } catch (e) {
            return {};
        }
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        switchProduct: (state, action) => {
            const { category, value } = action.payload;

            // remove proxy
            const { item, page } = JSON.parse(JSON.stringify(state));

            const newSelectedVariation = {...page.selectedVariation, [category]: value };
            const newSKU = findSKUFromVariant(item, newSelectedVariation);
            
            state.page.activeSKUId = newSKU.skuId;
            state.page.selectedVariation = newSKU.variant;
        },
    },
    extraReducers: {
        [fetchProducts.fulfilled]: (state, { payload : product }) => {
            state.page = preselectVariant(product);
            state.item = product;
        }
    }
});

export const { switchProduct } = productSlice.actions;

export default productSlice.reducer;