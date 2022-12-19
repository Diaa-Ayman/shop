import { PureComponent } from "react";
import styled from "styled-components";
import attributeSizeCalc from "../util/attributeSize";
import { StyledSpan, Attribute } from "./styles/Global";
export default class AttributeElement extends PureComponent {
  addItemToCart(item) {
    if (this.props.highlight && !this.props.disabled) {
      this.props.attribute.items.forEach((thisItem) => {
        thisItem.selected = false;
        if (item.id === thisItem.id) {
          thisItem.selected = true;
        }
      });

      this.props.getAttributes && this.props.getAttributes();
    }
  }
  render() {
    const { attribute } = this.props;
    const colorAttr = attribute.name === "Color";
    const { width, height } = attributeSizeCalc(colorAttr, this.props.overlay);

    return (
      <AttrElement>
        <StyledSpan fontWeight="900" fontSize="1rem" fontFamily="raleway">
          {attribute.name.toUpperCase()}:
        </StyledSpan>
        <AttributesContainer>
          {attribute.items.map((item) => {
            return (
              <Attribute
                onClick={this.addItemToCart.bind(this, item)}
                overlay={this.props.overlay}
                disabled={this.props.disabled}
                selected={item.selected}
                color={colorAttr ? item.value : undefined}
                colorAttr={colorAttr}
                key={item.id}
                backgroundColor={colorAttr ? item.value : "#fff"}
                width={width}
                height={height}
                hoveredBackgroundColor={!colorAttr && this.props.hoverBg}
                hoveredColor={this.props.hoverColor}
              >
                {/* Need for test IMP */}
                {!colorAttr && item.value}
              </Attribute>
            );
          })}
        </AttributesContainer>
      </AttrElement>
    );
  }
}

const AttrElement = styled.div``;

const AttributesContainer = styled.div`
  display: flex;
  margin-top: 5px;
`;
