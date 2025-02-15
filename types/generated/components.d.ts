import type { Schema, Struct } from '@strapi/strapi';

export interface CardCard extends Struct.ComponentSchema {
  collectionName: 'components_card_cards';
  info: {
    displayName: 'card';
    icon: 'apps';
  };
  attributes: {
    firstBulletPoint: Schema.Attribute.String & Schema.Attribute.Required;
    forthBulletPoint: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    secondBulletPoint: Schema.Attribute.String & Schema.Attribute.Required;
    thirdBulletPoint: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FifthContentListFifthContentList
  extends Struct.ComponentSchema {
  collectionName: 'components_fifth_content_list_fifth_content_lists';
  info: {
    displayName: 'fifthContentList';
    icon: 'bulletList';
  };
  attributes: {
    firstButtonTitle: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    secondButtonTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FirstContentListFirstContentList
  extends Struct.ComponentSchema {
  collectionName: 'components_first_content_list_first_content_lists';
  info: {
    description: '';
    displayName: 'firstContentList';
    icon: 'bulletList';
  };
  attributes: {
    firstBulletText: Schema.Attribute.String & Schema.Attribute.Required;
    firstButtonTitle: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    homeBanner: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    mobileHomeBanner: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    secondBulletText: Schema.Attribute.String & Schema.Attribute.Required;
    secondButtonTitle: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    thirdBulletText: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ForthContentListForthContentList
  extends Struct.ComponentSchema {
  collectionName: 'components_forth_content_list_forth_content_lists';
  info: {
    displayName: 'forthContentList';
    icon: 'bulletList';
  };
  attributes: {
    buttonTitle: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface SecondContentListSecondContentList
  extends Struct.ComponentSchema {
  collectionName: 'components_second_content_list_second_content_lists';
  info: {
    displayName: 'secondContentList';
    icon: 'bulletList';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sliderImages: Schema.Attribute.Media<'images', true> &
      Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ShopifyCardShopifyCard extends Struct.ComponentSchema {
  collectionName: 'components_shopify_card_shopify_cards';
  info: {
    displayName: 'shopifyCard';
    icon: 'apps';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ShopifyFifthContentListFifthContentList
  extends Struct.ComponentSchema {
  collectionName: 'components_shopify_fifth_content_list_fifth_content_lists';
  info: {
    displayName: 'fifthContentList';
    icon: 'bulletList';
  };
  attributes: {
    buttonTitle: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    smallCard: Schema.Attribute.Component<'small-card.small-card', true> &
      Schema.Attribute.Required;
  };
}

export interface ShopifyFirstContentListFirstContentList
  extends Struct.ComponentSchema {
  collectionName: 'components_shopify_first_content_list_first_content_lists';
  info: {
    displayName: 'firstContentList';
    icon: 'bulletList';
  };
  attributes: {
    firstButtonTitle: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    secondButtonTitle: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ShopifyForthContentListForthContentList
  extends Struct.ComponentSchema {
  collectionName: 'components_shopify_forth_content_list_forth_content_lists';
  info: {
    displayName: 'forthContentList';
    icon: 'bulletList';
  };
  attributes: {
    buttonTitle: Schema.Attribute.String & Schema.Attribute.Required;
    firstBulletText: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    secondBulletText: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    thirdBulletText: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ShopifySecondContentListSecondContentList
  extends Struct.ComponentSchema {
  collectionName: 'components_shopify_second_content_list_second_content_lists';
  info: {
    displayName: 'secondContentList';
    icon: 'bulletList';
  };
  attributes: {
    shopifyCard: Schema.Attribute.Component<'shopify-card.shopify-card', true> &
      Schema.Attribute.Required;
  };
}

export interface ShopifySixthContentListSixthContentList
  extends Struct.ComponentSchema {
  collectionName: 'components_shopify_sixth_content_list_sixth_content_lists';
  info: {
    displayName: 'sixthContentList';
    icon: 'bulletList';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    smallList: Schema.Attribute.Component<'small-list.small-list', true> &
      Schema.Attribute.Required;
  };
}

export interface ShopifySliderListSliderList extends Struct.ComponentSchema {
  collectionName: 'components_shopify_slider_list_slider_lists';
  info: {
    displayName: 'sliderList';
    icon: 'bulletList';
  };
  attributes: {
    buttonTitle: Schema.Attribute.String & Schema.Attribute.Required;
    sliderImages: Schema.Attribute.Media<'images', true> &
      Schema.Attribute.Required;
  };
}

export interface ShopifyThirdContentListThirdContentList
  extends Struct.ComponentSchema {
  collectionName: 'components_shopify_third_content_list_third_content_lists';
  info: {
    displayName: 'thirdContentList';
    icon: 'bulletList';
  };
  attributes: {
    fifthBulletText: Schema.Attribute.String & Schema.Attribute.Required;
    firstBulletText: Schema.Attribute.String & Schema.Attribute.Required;
    forthBulletText: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    secondBulletText: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    thirdBulletText: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SliderListSliderList extends Struct.ComponentSchema {
  collectionName: 'components_slider_list_slider_lists';
  info: {
    description: '';
    displayName: 'sliderList';
    icon: 'bulletList';
  };
  attributes: {
    sliderHeading: Schema.Attribute.String & Schema.Attribute.Required;
    slidingImages: Schema.Attribute.Media<'images', true> &
      Schema.Attribute.Required;
  };
}

export interface SmallCardSmallCard extends Struct.ComponentSchema {
  collectionName: 'components_small_card_small_cards';
  info: {
    displayName: 'smallCard';
    icon: 'apps';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SmallListSmallList extends Struct.ComponentSchema {
  collectionName: 'components_small_list_small_lists';
  info: {
    displayName: 'smallList';
    icon: 'bulletList';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ThirdContentListThirdContentList
  extends Struct.ComponentSchema {
  collectionName: 'components_third_content_list_third_content_lists';
  info: {
    displayName: 'thirdContentList';
    icon: 'bulletList';
  };
  attributes: {
    card: Schema.Attribute.Component<'card.card', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'card.card': CardCard;
      'fifth-content-list.fifth-content-list': FifthContentListFifthContentList;
      'first-content-list.first-content-list': FirstContentListFirstContentList;
      'forth-content-list.forth-content-list': ForthContentListForthContentList;
      'second-content-list.second-content-list': SecondContentListSecondContentList;
      'shopify-card.shopify-card': ShopifyCardShopifyCard;
      'shopify-fifth-content-list.fifth-content-list': ShopifyFifthContentListFifthContentList;
      'shopify-first-content-list.first-content-list': ShopifyFirstContentListFirstContentList;
      'shopify-forth-content-list.forth-content-list': ShopifyForthContentListForthContentList;
      'shopify-second-content-list.second-content-list': ShopifySecondContentListSecondContentList;
      'shopify-sixth-content-list.sixth-content-list': ShopifySixthContentListSixthContentList;
      'shopify-slider-list.slider-list': ShopifySliderListSliderList;
      'shopify-third-content-list.third-content-list': ShopifyThirdContentListThirdContentList;
      'slider-list.slider-list': SliderListSliderList;
      'small-card.small-card': SmallCardSmallCard;
      'small-list.small-list': SmallListSmallList;
      'third-content-list.third-content-list': ThirdContentListThirdContentList;
    }
  }
}
