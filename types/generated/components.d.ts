import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductProductFiles extends Schema.Component {
  collectionName: 'components_product_product_files';
  info: {
    displayName: 'Product Files';
    icon: 'database';
  };
  attributes: {
    TabTitle: Attribute.String;
    Files: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ProductProductInfo extends Schema.Component {
  collectionName: 'components_product_product_infos';
  info: {
    displayName: 'Product Info';
    icon: 'cube';
    description: '';
  };
  attributes: {
    Product: Attribute.JSON &
      Attribute.CustomField<
        'plugin::shopify-fields.single-product',
        {
          fields: [
            'title',
            'handle',
            'vendor',
            'variants',
            'updated_at',
            'template_suffix',
            'tags',
            'status',
            'published_scope',
            'published_at',
            'product_type',
            'options',
            'image',
            'images',
            'created_at',
            'body_html',
            'id'
          ];
        }
      >;
    InfoFiles: Attribute.Component<'product.product-files', true>;
    ProductTab: Attribute.Component<'product.product-tabs', true>;
  };
}

export interface ProductProductTabs extends Schema.Component {
  collectionName: 'components_product_product_tabs';
  info: {
    displayName: 'Product Tabs';
    icon: 'folder';
    description: '';
  };
  attributes: {
    TabTitle: Attribute.String;
    TabText: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product.product-files': ProductProductFiles;
      'product.product-info': ProductProductInfo;
      'product.product-tabs': ProductProductTabs;
    }
  }
}
