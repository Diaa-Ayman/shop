import React, { PureComponent } from "react";
// import testImage from '../../../assets/testImage.png';
import Details from "./Details";
import fetchData from "../../../api/fetchFun";
import {
  DetailsContainer,
  ProductGallery,
  GalleryImage,
  Availables,
  Image,
} from "../../styles/productDetails.style";
import { GET_ALL_PRODUCTS } from "../../../api/queries";
// A Dynamic Page...

class ProductDetails extends PureComponent {
  constructor() {
    super();
    this.state = {
      product: {},
      loading: false,
      imageShowen: null,
      counter: 0,
    };
  }

  showImageHandler(src) {
    this.setState({ ...this.state, imageShowen: src });
  }

  async componentDidMount() {
    try {
      const data = await fetchData(GET_ALL_PRODUCTS);

      const product = data.data.category.products.find(
        (product) => product.id === this.props.id
      );
      const updatedProductAttributes = product.attributes.map((attribute) => {
        return {
          ...attribute,
          items: attribute.items.map((item) => {
            return {
              ...item,
              selected: false,
            };
          }),
        };
      });

      const updatedProduct = {
        ...product,
        attributes: updatedProductAttributes,
      };

      this.setState({
        product: updatedProduct,
        loading: data.loading,
      });
    } catch (error) {
      console.log("ERORR!!");
    }
  }
  updatedProductPage() {
    this.componentDidMount();
  }
  render() {
    return (
      <DetailsContainer>
        <ProductGallery>
          <Availables>
            {this.state.product.gallery?.map((image, index) => (
              <GalleryImage
                src={image}
                key={index}
                onClick={this.showImageHandler.bind(this, image)}
              />
            ))}
          </Availables>
          <Image
            src={
              !this.state.imageShowen && this.state.product.gallery
                ? this.state.product?.gallery[0]
                : this.state.imageShowen
            }
          />
        </ProductGallery>
        <Details
          product={this.state.product && this.state.product}
          onUpdate={this.updatedProductPage.bind(this)}
        />
      </DetailsContainer>
    );
  }
}

export default ProductDetails;
