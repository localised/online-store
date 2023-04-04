import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { switchProduct } from "./slice";
import { selectCurrentSKU, selectAvailableVariants } from './selectors';
import ProductSection from './component';
import { cartAdd } from '../cart/slice';

const mapStateToProps = createStructuredSelector({
    currentSKU: selectCurrentSKU,
    availableVariants: selectAvailableVariants,
});

const mapDispatchToProps = dispatch => {
    return {
        selectVariant(category, value) {
            dispatch(switchProduct({category, value}))
        },
        addToCart({ skuId }) {
            dispatch(cartAdd({ skuId }))
        }
    };
};

export const ProductSectionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductSection);
