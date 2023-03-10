import Modal from "../Modal";
import { PureComponent } from "react";
import { StyledSpan } from "../styles/Global";
import { connect } from "react-redux";
import CartElement from "./CartElement";
import { withRouter } from "react-router";
import { hideCartOverlay } from "../../store/overlays-slice";

import {
  ActionButton,
  Container,
  Actions,
  TotalAmount,
  Foot,
  Head,
} from "../styles/CartOverlay.style";

class CartOverlay extends PureComponent {
  openCartHandler() {
    this.props.hideOverlay();
    this.props.history.push("/my-cart");
  }

  hideOverlayHandler() {
    this.props.hideOverlay();
  }
  render() {
    return (
      <Modal
        backgroundColor="rgba(0, 0, 0, 0.75)"
        top="4rem"
        left="63%"
        width="370px"
        onClick={this.hideOverlayHandler.bind(this)}
      >
        <Head>
          <StyledSpan
            fontSize="1rem"
            fontWeight="bolder"
            fontFamily="raleway"
            margin="1rem 0 0 0"
          >
            My Bag: {this.props.totalQuantity} items
          </StyledSpan>
        </Head>
        <Container>
          {this.props?.cartProducts.map((product) => (
            <CartElement overlay product={product} key={product.uid} />
          ))}
        </Container>

        <Foot>
          <TotalAmount>
            <StyledSpan fontSize="1.2rem" fontWeight="900" fontFamily="raleway">
              Total
            </StyledSpan>
            <StyledSpan fontSize="1.1rem" fontWeight="900" fontFamily="raleway">
              {this.props.currentCurrency} {this.props.totalAmount.toFixed(2)}
            </StyledSpan>
          </TotalAmount>
          <Actions>
            <ActionButton
              border=".8px solid"
              hoveredColor="#fff"
              hoveredBackgroundColor="#0f0f0f"
              width="50%"
              onClick={this.openCartHandler.bind(this)}
            >
              VIEW BAG
            </ActionButton>
            <ActionButton backgroundColor="#55E180" color="#fff" width="50%">
              CHECK OUT
            </ActionButton>
          </Actions>
        </Foot>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cart.items,
    totalQuantity: state.cart.totalQuantity,
    totalAmount: state.cart.totalAmount,
    currentCurrency: state.cart.priceCurrency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideOverlay: () => dispatch(hideCartOverlay()),
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartOverlay)
);
