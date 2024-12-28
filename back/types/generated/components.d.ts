import type { Schema, Struct } from '@strapi/strapi';

export interface PageAccordion extends Struct.ComponentSchema {
  collectionName: 'components_page_accordions';
  info: {
    description: '';
    displayName: '\u0421arousel';
    icon: 'chartBubble';
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_page_info_cards';
  info: {
    displayName: 'InfoCard';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageSlideItem extends Struct.ComponentSchema {
  collectionName: 'components_page_slide_items';
  info: {
    displayName: 'slide_item';
    icon: 'picture';
  };
  attributes: {
    btn_link: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageSlider extends Struct.ComponentSchema {
  collectionName: 'components_page_sliders';
  info: {
    displayName: 'slider';
    icon: 'book';
  };
  attributes: {
    item: Schema.Attribute.Component<'page.slide-item', true>;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
  };
}

export interface PageSpecialOffer extends Struct.ComponentSchema {
  collectionName: 'components_page_special_offers';
  info: {
    displayName: 'SpecialOffer';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageTab extends Struct.ComponentSchema {
  collectionName: 'components_page_tabs';
  info: {
    description: '';
    displayName: 'Tab';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    item: Schema.Attribute.Component<'page.tab-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageTabItem extends Struct.ComponentSchema {
  collectionName: 'components_page_tab_items';
  info: {
    displayName: 'tabItem';
    icon: 'code';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page.accordion': PageAccordion;
      'page.info-card': PageInfoCard;
      'page.slide-item': PageSlideItem;
      'page.slider': PageSlider;
      'page.special-offer': PageSpecialOffer;
      'page.tab': PageTab;
      'page.tab-item': PageTabItem;
    }
  }
}
