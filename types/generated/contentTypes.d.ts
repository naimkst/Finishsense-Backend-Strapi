import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductInfoProductInfo extends Schema.CollectionType {
  collectionName: 'product_infos';
  info: {
    singularName: 'product-info';
    pluralName: 'product-infos';
    displayName: 'Product Info';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    product_info: Attribute.Component<'product.product-info'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-info.product-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-info.product-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiResourceResource extends Schema.CollectionType {
  collectionName: 'resources';
  info: {
    singularName: 'resource';
    pluralName: 'resources';
    displayName: 'Resource';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    File: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    resource_folder: Attribute.Relation<
      'api::resource.resource',
      'manyToOne',
      'api::resource-folder.resource-folder'
    >;
    resource_sub_folder: Attribute.Relation<
      'api::resource.resource',
      'manyToOne',
      'api::resource-sub-folder.resource-sub-folder'
    >;
    resource_sub_folder_2: Attribute.Relation<
      'api::resource.resource',
      'manyToOne',
      'api::resource-sub-folder-2.resource-sub-folder-2'
    >;
    resource_sub_folder_3: Attribute.Relation<
      'api::resource.resource',
      'manyToOne',
      'api::resource-sub-folder-3.resource-sub-folder-3'
    >;
    resource_sub_folder_4: Attribute.Relation<
      'api::resource.resource',
      'manyToOne',
      'api::resource-sub-folder-4.resource-sub-folder-4'
    >;
    resource_sub_folder_5: Attribute.Relation<
      'api::resource.resource',
      'manyToOne',
      'api::resource-sub-folder-5.resource-sub-folder-5'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::resource.resource',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::resource.resource',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiResourceFolderResourceFolder extends Schema.CollectionType {
  collectionName: 'resource_folders';
  info: {
    singularName: 'resource-folder';
    pluralName: 'resource-folders';
    displayName: 'Resource Folder';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    FolderName: Attribute.String;
    resources: Attribute.Relation<
      'api::resource-folder.resource-folder',
      'oneToMany',
      'api::resource.resource'
    >;
    resource_sub_folder_1s: Attribute.Relation<
      'api::resource-folder.resource-folder',
      'oneToMany',
      'api::resource-sub-folder.resource-sub-folder'
    >;
    resource_sub_folder_2s: Attribute.Relation<
      'api::resource-folder.resource-folder',
      'oneToMany',
      'api::resource-sub-folder-2.resource-sub-folder-2'
    >;
    resource_sub_folder_3s: Attribute.Relation<
      'api::resource-folder.resource-folder',
      'oneToMany',
      'api::resource-sub-folder-3.resource-sub-folder-3'
    >;
    resource_sub_folder_4s: Attribute.Relation<
      'api::resource-folder.resource-folder',
      'oneToMany',
      'api::resource-sub-folder-4.resource-sub-folder-4'
    >;
    resource_sub_folder_5s: Attribute.Relation<
      'api::resource-folder.resource-folder',
      'oneToMany',
      'api::resource-sub-folder-5.resource-sub-folder-5'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::resource-folder.resource-folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::resource-folder.resource-folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiResourceSubFolderResourceSubFolder
  extends Schema.CollectionType {
  collectionName: 'resource_sub_folders';
  info: {
    singularName: 'resource-sub-folder';
    pluralName: 'resource-sub-folders';
    displayName: 'Resource Sub Folder 1';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    SubFolderName: Attribute.String;
    resources: Attribute.Relation<
      'api::resource-sub-folder.resource-sub-folder',
      'oneToMany',
      'api::resource.resource'
    >;
    resource_folder: Attribute.Relation<
      'api::resource-sub-folder.resource-sub-folder',
      'manyToOne',
      'api::resource-folder.resource-folder'
    >;
    resource_sub_folder_2s: Attribute.Relation<
      'api::resource-sub-folder.resource-sub-folder',
      'oneToMany',
      'api::resource-sub-folder-2.resource-sub-folder-2'
    >;
    resource_sub_folder_3s: Attribute.Relation<
      'api::resource-sub-folder.resource-sub-folder',
      'oneToMany',
      'api::resource-sub-folder-3.resource-sub-folder-3'
    >;
    resource_sub_folder_4s: Attribute.Relation<
      'api::resource-sub-folder.resource-sub-folder',
      'oneToMany',
      'api::resource-sub-folder-4.resource-sub-folder-4'
    >;
    resource_sub_folder_5s: Attribute.Relation<
      'api::resource-sub-folder.resource-sub-folder',
      'oneToMany',
      'api::resource-sub-folder-5.resource-sub-folder-5'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::resource-sub-folder.resource-sub-folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::resource-sub-folder.resource-sub-folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiResourceSubFolder2ResourceSubFolder2
  extends Schema.CollectionType {
  collectionName: 'resource_sub_folder_2s';
  info: {
    singularName: 'resource-sub-folder-2';
    pluralName: 'resource-sub-folder-2s';
    displayName: 'Resource Sub Folder 2';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    FolderName: Attribute.String;
    resource_sub_folder_3: Attribute.Relation<
      'api::resource-sub-folder-2.resource-sub-folder-2',
      'manyToOne',
      'api::resource-sub-folder-3.resource-sub-folder-3'
    >;
    resources: Attribute.Relation<
      'api::resource-sub-folder-2.resource-sub-folder-2',
      'oneToMany',
      'api::resource.resource'
    >;
    resource_folder: Attribute.Relation<
      'api::resource-sub-folder-2.resource-sub-folder-2',
      'manyToOne',
      'api::resource-folder.resource-folder'
    >;
    resource_sub_folder_1: Attribute.Relation<
      'api::resource-sub-folder-2.resource-sub-folder-2',
      'manyToOne',
      'api::resource-sub-folder.resource-sub-folder'
    >;
    resource_sub_folder_4s: Attribute.Relation<
      'api::resource-sub-folder-2.resource-sub-folder-2',
      'oneToMany',
      'api::resource-sub-folder-4.resource-sub-folder-4'
    >;
    resource_sub_folder_5s: Attribute.Relation<
      'api::resource-sub-folder-2.resource-sub-folder-2',
      'oneToMany',
      'api::resource-sub-folder-5.resource-sub-folder-5'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::resource-sub-folder-2.resource-sub-folder-2',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::resource-sub-folder-2.resource-sub-folder-2',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiResourceSubFolder3ResourceSubFolder3
  extends Schema.CollectionType {
  collectionName: 'resource_sub_folder_3s';
  info: {
    singularName: 'resource-sub-folder-3';
    pluralName: 'resource-sub-folder-3s';
    displayName: 'Resource Sub Folder 3';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    FolderName: Attribute.String;
    resource_sub_folder_2s: Attribute.Relation<
      'api::resource-sub-folder-3.resource-sub-folder-3',
      'oneToMany',
      'api::resource-sub-folder-2.resource-sub-folder-2'
    >;
    resource_sub_folder_4: Attribute.Relation<
      'api::resource-sub-folder-3.resource-sub-folder-3',
      'manyToOne',
      'api::resource-sub-folder-4.resource-sub-folder-4'
    >;
    resources: Attribute.Relation<
      'api::resource-sub-folder-3.resource-sub-folder-3',
      'oneToMany',
      'api::resource.resource'
    >;
    resource_folder: Attribute.Relation<
      'api::resource-sub-folder-3.resource-sub-folder-3',
      'manyToOne',
      'api::resource-folder.resource-folder'
    >;
    resource_sub_folder_1: Attribute.Relation<
      'api::resource-sub-folder-3.resource-sub-folder-3',
      'manyToOne',
      'api::resource-sub-folder.resource-sub-folder'
    >;
    resource_sub_folder_5s: Attribute.Relation<
      'api::resource-sub-folder-3.resource-sub-folder-3',
      'oneToMany',
      'api::resource-sub-folder-5.resource-sub-folder-5'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::resource-sub-folder-3.resource-sub-folder-3',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::resource-sub-folder-3.resource-sub-folder-3',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiResourceSubFolder4ResourceSubFolder4
  extends Schema.CollectionType {
  collectionName: 'resource_sub_folder_4s';
  info: {
    singularName: 'resource-sub-folder-4';
    pluralName: 'resource-sub-folder-4s';
    displayName: 'Resource Sub Folder 4';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    FolderName: Attribute.String;
    resource_sub_folder_3s: Attribute.Relation<
      'api::resource-sub-folder-4.resource-sub-folder-4',
      'oneToMany',
      'api::resource-sub-folder-3.resource-sub-folder-3'
    >;
    resource_sub_folder_5: Attribute.Relation<
      'api::resource-sub-folder-4.resource-sub-folder-4',
      'manyToOne',
      'api::resource-sub-folder-5.resource-sub-folder-5'
    >;
    resources: Attribute.Relation<
      'api::resource-sub-folder-4.resource-sub-folder-4',
      'oneToMany',
      'api::resource.resource'
    >;
    resource_folder: Attribute.Relation<
      'api::resource-sub-folder-4.resource-sub-folder-4',
      'manyToOne',
      'api::resource-folder.resource-folder'
    >;
    resource_sub_folder_1: Attribute.Relation<
      'api::resource-sub-folder-4.resource-sub-folder-4',
      'manyToOne',
      'api::resource-sub-folder.resource-sub-folder'
    >;
    resource_sub_folder_2: Attribute.Relation<
      'api::resource-sub-folder-4.resource-sub-folder-4',
      'manyToOne',
      'api::resource-sub-folder-2.resource-sub-folder-2'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::resource-sub-folder-4.resource-sub-folder-4',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::resource-sub-folder-4.resource-sub-folder-4',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiResourceSubFolder5ResourceSubFolder5
  extends Schema.CollectionType {
  collectionName: 'resource_sub_folder_5s';
  info: {
    singularName: 'resource-sub-folder-5';
    pluralName: 'resource-sub-folder-5s';
    displayName: 'Resource Sub Folder 5';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    FolderName: Attribute.String;
    resource_sub_folder_4s: Attribute.Relation<
      'api::resource-sub-folder-5.resource-sub-folder-5',
      'oneToMany',
      'api::resource-sub-folder-4.resource-sub-folder-4'
    >;
    resources: Attribute.Relation<
      'api::resource-sub-folder-5.resource-sub-folder-5',
      'oneToMany',
      'api::resource.resource'
    >;
    resource_folder: Attribute.Relation<
      'api::resource-sub-folder-5.resource-sub-folder-5',
      'manyToOne',
      'api::resource-folder.resource-folder'
    >;
    resource_sub_folder_1: Attribute.Relation<
      'api::resource-sub-folder-5.resource-sub-folder-5',
      'manyToOne',
      'api::resource-sub-folder.resource-sub-folder'
    >;
    resource_sub_folder_2: Attribute.Relation<
      'api::resource-sub-folder-5.resource-sub-folder-5',
      'manyToOne',
      'api::resource-sub-folder-2.resource-sub-folder-2'
    >;
    resource_sub_folder_3: Attribute.Relation<
      'api::resource-sub-folder-5.resource-sub-folder-5',
      'manyToOne',
      'api::resource-sub-folder-3.resource-sub-folder-3'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::resource-sub-folder-5.resource-sub-folder-5',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::resource-sub-folder-5.resource-sub-folder-5',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::product-info.product-info': ApiProductInfoProductInfo;
      'api::resource.resource': ApiResourceResource;
      'api::resource-folder.resource-folder': ApiResourceFolderResourceFolder;
      'api::resource-sub-folder.resource-sub-folder': ApiResourceSubFolderResourceSubFolder;
      'api::resource-sub-folder-2.resource-sub-folder-2': ApiResourceSubFolder2ResourceSubFolder2;
      'api::resource-sub-folder-3.resource-sub-folder-3': ApiResourceSubFolder3ResourceSubFolder3;
      'api::resource-sub-folder-4.resource-sub-folder-4': ApiResourceSubFolder4ResourceSubFolder4;
      'api::resource-sub-folder-5.resource-sub-folder-5': ApiResourceSubFolder5ResourceSubFolder5;
    }
  }
}
