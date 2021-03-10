import  ModuleCreate from './components/admin/ModuleCreate.vue';
import  MenuCreate from './components/admin/MenuCreate.vue';
import  MenuPermission from './components/admin/MenuPermission.vue';
import  SubMenuCreate from './components/admin/SubMenuCreate.vue';
import  AdminTypeEntry from './components/admin/AdminTypeEntry.vue';
import  AdminEntry from './components/admin/AdminEntry.vue';
import  Logo from './components/admin/Logo.vue';
import  Slider from './components/admin/Slider.vue';
import  Privacy from './components/admin/Privacy.vue';
import  Terms from './components/admin/Terms.vue';
import  FAQ from './components/admin/FAQ.vue';
import  About from './components/admin/About.vue';
import  Category from './components/admin/Category.vue';
import  UnitEntry from './components/admin/UnitEntry.vue';
import  BrandEntry from './components/admin/BrandEntry.vue';
import  ColorEntry from './components/admin/ColorEntry.vue';
import  SizeEntry from './components/admin/SizeEntry.vue';
import  SupplierEntry from './components/admin/SupplierEntry.vue';
import  OrderPolicy from './components/admin/OrderPolicy.vue';
import  PurchaseEntry from './components/admin/PurchaseEntry.vue';
import  ProductNameEntry from './components/admin/ProductNameEntry.vue';
import  SupplierBusinessType from './components/admin/SupplierBusinessType.vue';
import  PurchaseType from './components/admin/PurchaseType.vue';
import  UnitList from './components/admin/UnitList.vue';
import  BrandList from './components/admin/BrandList.vue';
import  ColorList from './components/admin/ColorList.vue';
import  SupplierList from './components/admin/SupplierList.vue';
import  SupplierStatement from './components/admin/SupplierStatement.vue';
import  BusinessList from './components/admin/BusinessList.vue';
import  PurchaseTypeList from './components/admin/PurchaseTypeList.vue';
import  PurchaseInvoiceReport from './components/admin/PurchaseInvoiceReport.vue';
import  PurchaseList from './components/admin/PurchaseList.vue';
import  PurchaseProductDetails from './components/admin/PurchaseProductDetails.vue';
import  PriceSetup from './components/admin/PriceSetup.vue';
import  WarehouseLocation from './components/admin/WarehouseLocation.vue';
import  WareHouseEntry from './components/admin/WareHouseEntry.vue';
import  ProductTransfer from './components/admin/ProductTransfer.vue';
import  ProductTransferReport from './components/admin/ProductTransferReport.vue';
import  CategoryList from './components/admin/CategoryList.vue';
import  ThirdCategory from './components/admin/ThirdCategory.vue';
import  FourthCategory from './components/admin/FourthCategory.vue';
import  PriceList from './components/admin/PriceList.vue';
import  ProductList from './components/admin/ProductList.vue';
import  ProductNameList from './components/admin/ProductNameList.vue';
import  WarehouseList from './components/admin/WarehouseList.vue';
import  WarehouseProductList from './components/admin/WarehouseProductList.vue';
import  CategoryAndProduct from './components/admin/CategoryAndProduct.vue';
import  BrandWiseStock from './components/admin/BrandWiseStock.vue';
import  BangladeshLocation from './components/admin/BangladeshLocation.vue';
import  DeliveryLocation from './components/admin/DeliveryLocation.vue';
import  DeliveryCharge from './components/admin/DeliveryCharge.vue';
import  StockSummery from './components/admin/StockSummery.vue';
import  PriceRange from './components/admin/PriceRange.vue';
import  ProductTransferSummery from './components/admin/ProductTransferSummery.vue';
import  ProductTransferBackReport from './components/admin/ProductTransferBackReport.vue';
import  BrandwiseProductList from './components/admin/BrandwiseProductList.vue';
import  CategoryPermission from './components/admin/CategoryPermission.vue';
import  ProductImageAdd from './components/admin/ProductImageAdd.vue';
import  ProductImageDetails from './components/admin/ProductImageDetails.vue';
import  FilteringStatus from './components/admin/FilteringStatus.vue';
import  CategoryWiseView from './components/website-view/CategoryWiseView.vue';
import  CategoryThirdView from './components/website-view/CategoryThirdView.vue';
import  DistrictLocaton from './components/website-view/Delivery-Location/DistrictLocation.vue';
import  ThanaLocaton from './components/website-view/Delivery-Location/ThanaLocation.vue';
import  WardLocaton from './components/website-view/Delivery-Location/WardLocation.vue';
import  CategoryThirdProductView from './components/website-view/CategoryThirdProductView.vue';
import  SearchProduct from './components/website-view/SearchProduct.vue';
import  DeliveryManInfo from './components/admin/DeliveryMan/DeliveryManInfo.vue';
import  EditWarehouse from './components/admin/edit/EditWarehouse.vue';
import  EditModule from './components/admin/edit/EditModule.vue';
import  EditMenu from './components/admin/edit/EditMenu.vue';
import  EditAdmin from './components/admin/edit/EditAdmin.vue';
import  EditMenuPermission from './components/admin/edit/EditMenuPermission.vue';
import  EditSubMenu from './components/admin/edit/EditSubMenu.vue';
import  EditAdminType from './components/admin/edit/EditAdminType.vue';
import  EditSlider from './components/admin/edit/EditSlider.vue';
import  EditPrivacy from './components/admin/edit/EditPrivacy.vue';
import  EditTerms from './components/admin/edit/EditTerms.vue';
import  EditPriceRange from './components/admin/edit/EditPriceRange.vue';
import  EditFAQ from './components/admin/edit/EditFAQ.vue';
import  EditOrderPolicy from './components/admin/edit/EditOrderPolicy.vue';
import  EditAbout from './components/admin/edit/EditAbout.vue';
import  EditCategory from './components/admin/edit/EditCategory.vue';
import  EditUnitEntry from './components/admin/edit/EditUnitEntry.vue';
import  EditBrand from './components/admin/edit/EditBrand.vue';
import  EditColor from './components/admin/edit/EdiTcolor.vue';
import  EditProductName from './components/admin/edit/EditProductName.vue';
import  EditSizeEntry from './components/admin/edit/EdiTSizeEntry.vue';
import  EditSupplier from './components/admin/edit/EdiTSupplier.vue';
import  EditBusinessType from './components/admin/edit/EditBusinessType.vue';
import  EditPurchaseType from './components/admin/edit/EditPurchaseType.vue';
import  EditPurchase from './components/admin/edit/EditPurchase.vue';
import  EditProductTransfer from './components/admin/edit/EditProductTransfer.vue';
import  EditCategoryPermission from './components/admin/edit/EditCategoryPermission.vue';
import  EditDeliveryCharge from './components/admin/edit/EditDeliveryCharge.vue';
import  EditDeliveryTime from './components/admin/edit/EditDeliveryTime.vue';
export const routes = [
    {    name: 'modulecreate',
         path: '/modulecreate',
         component: ModuleCreate,
        
     },
    {    name: 'menuentry',
         path: '/menuentry',
         component: MenuCreate,
        
     },
    {    name: 'productlist',
         path: '/productlist',
         component: ProductList,
        
     },
    {    name: 'searchproduct',
         path: '/searchproduct',
         component: SearchProduct,
         meta: { hideDashboard: true }
        
     },
    {    name: 'districtlocation',
         path: '/districtlocation/:id',
         component: DistrictLocaton,
         meta: { hideDashboard: true }
        
     },
    {    name: 'wardlocation',
         path: '/wardlocation/:id',
         component: WardLocaton,
         meta: { hideDashboard: true }
        
     },
    {    name: 'thanalocation',
         path: '/thanalocation/:id',
         component: ThanaLocaton,
         meta: { hideDashboard: true }
        
     },
    {    name: 'stocksummery',
         path: '/stocksummery',
         component: StockSummery,
        
     },
    {    name: 'categoryandproduct',
         path: '/categoryandproduct',
         component: CategoryAndProduct,
        
     },
    {    name: 'deliverymaninfo',
         path: '/deliverymaninfo',
         component: DeliveryManInfo,
        
     },
    {    name: 'submenuentry',
         path: '/submenuentry',
         component: SubMenuCreate,
        
     },
    {    name: 'brandwisestock',
         path: '/brandwisestock',
         component: BrandWiseStock,
        
     },
    {    name: 'admintype',
         path: '/admintype',
         component: AdminTypeEntry,
        
     },
    {    name: 'producttransfer',
         path: '/producttransfer',
         component: ProductTransfer,
        
     },
    {    name: 'adminentry',
         path: '/adminentry',
         component: AdminEntry,
        
     },
    {    name: 'pricelist',
         path: '/pricelist',
         component: PriceList,
        
     },
    {    name: 'productnamelist',
         path: '/productnamelist',
         component: ProductNameList,
        
     },
    {    name: 'logo',
         path: '/logo',
         component: Logo,
        
     },
    {    name: 'slider',
         path: '/slider',
         component: Slider,
        
     },
    {    name: 'privacy',
         path: '/privacy',
         component: Privacy,
        
     },
    {    name: 'terms',
         path: '/terms',
         component: Terms,
        
     },
    {    name: 'faq',
         path: '/faq',
         component: FAQ,
        
     },
    {    name: 'about',
         path: '/about',
         component: About,
        
     },
    {    name: 'policy',
         path: '/policy',
         component: OrderPolicy,
        
     },
    {    name: 'transferbackreport',
         path: '/transferbackreport',
         component: ProductTransferBackReport,
        
     },
    {    name: 'category',
         path: '/category',
         component: Category,
        
     },
    {    name: 'menupermission',
         path: '/menupermission',
         component: MenuPermission,
        
     },
    {    name: 'unit',
         path: '/unit',
         component: UnitEntry,
        
     },
    {    name: 'brand',
         path: '/brand',
         component: BrandEntry,
        
     },
    {    name: 'color',
         path: '/color',
         component: ColorEntry,
        
     },
    {    name: 'unitlist',
         path: '/unitlist',
         component: UnitList,
        
     },
    {    name: 'warehouselocation',
         path: '/warehouselocation',
         component: WarehouseLocation,
        
     },
    {    name: 'warehouse',
         path: '/warehouse',
         component: WareHouseEntry,
        
     },
    {    name: 'size',
         path: '/size',
         component: SizeEntry,
        
     },
    {    name: 'supplier',
         path: '/supplier',
         component: SupplierEntry,
        
     },
    {    name: 'purchase',
         path: '/purchase',
         component: PurchaseEntry,
        
     },
    {    name: 'productname',
         path: '/productname',
         component: ProductNameEntry,
        
     },
    {    name: 'pricesetup',
         path: '/pricesetup',
         component: PriceSetup,
        
     },
    {    name: 'businesstype',
         path: '/businesstype',
         component: SupplierBusinessType,
        
     },
    {    name: 'brandlist',
         path: '/brandlist',
         component: BrandList,
        
     },
    {    name: 'deliverylocation',
         path: '/deliverylocation',
         component:DeliveryLocation,
        
     },
    {    name: 'supplierlist',
         path: '/supplierlist',
         component: SupplierList,
        
     },
    {    name: 'purchasetypelist',
         path: '/purchasetypelist',
         component: PurchaseTypeList,
        
     },
    {    name: 'purchaselist',
         path: '/purchaselist',
         component: PurchaseList,
        
     },
    {    name: 'deliverycharge',
         path: '/deliverycharge',
         component: DeliveryCharge,
        
     },
    {    name: 'warehouselist',
         path: '/warehouselist',
         component: WarehouseList,
        
     },
    {    name: 'producttransferreport',
         path: '/producttransferreport',
         component: ProductTransferReport,
        
     },
    {    name: 'purchaseinvoicereport',
         path: '/purchaseinvoicereport',
         component: PurchaseInvoiceReport,
        
     },
    {    name: 'colorlist',
         path: '/colorlist',
         component: ColorList,
        
     },
    {    name: 'categorypermission',
         path: '/categorypermission',
         component: CategoryPermission,
        
     },
    {    name: 'pricerange',
         path: '/pricerange',
         component: PriceRange,
        
     },
    {    name: 'filteringstatus',
         path: '/filteringstatus',
         component: FilteringStatus,
        
     },
    {    name: 'editcatpermission',
         path: '/editcatpermission',
         component: EditCategoryPermission,
        
     },
    {    name: 'categorylist',
         path: '/categorylist',
         component: CategoryList,
        
     },
    {    name: 'businesslist',
         path: '/businesslist',
         component: BusinessList,
        
     },
    {    name: 'purchasetype',
         path: '/purchasetype',
         component: PurchaseType,
        
     },
     {
     name: 'editModule',
     path: '/editModule/:id',
     component: EditModule,
     meta: { hideDashboard: true }
    },
     {
     name: 'editproductname',
     path: '/editproductname/:id',
     component: EditProductName,
     meta: { hideDashboard: true }
    },
     {
     name: 'purchaseentryedit',
     path: '/purchaseentryedit/:id',
     component: EditPurchase,
     meta: { hideDashboard: true }
    },
     {
     name: 'editrange',
     path: '/editrange/:id',
     component: EditPriceRange,
     meta: { hideDashboard: true }
    },
     {
     name: 'editdeliverytime',
     path: '/editdeliverytime/:id',
     component: EditDeliveryTime,
     meta: { hideDashboard: true }
    },
     {
     name: 'editdeliverycharge',
     path: '/editdeliverycharge/:id',
     component: EditDeliveryCharge,
     meta: { hideDashboard: true }
    },
     {
     name: 'brandwiseproductlist',
     path: '/brandwiseproductlist/:id',
     component: BrandwiseProductList,
     meta: { hideDashboard: true }
    },
     {
     name: 'thirdcatlist',
     path: '/thirdcatlist/:id',
     component: ThirdCategory,
     meta: { hideDashboard: true }
    },
     {
     name: 'productimagedetails',
     path: '/productimagedetails/:id',
     component: ProductImageDetails,
     meta: { hideDashboard: true }
    },
     {
     name: 'view',
     path: '/view/:id',
     component: CategoryWiseView,
     meta: { hideDashboard: true }
    },
     {
     name: 'bangladeshlocation',
     path: '/bangladeshlocation',
     component: BangladeshLocation,
     meta: { hideDashboard: true }
    },
     {
     name: 'viewthird',
     path: '/viewthird/:id',
     component: CategoryThirdView,
     meta: { hideDashboard: true }
    },
     {
     name: 'viewthirdproduct',
     path: '/viewthirdproduct/:id',
     component: CategoryThirdProductView,
     meta: { hideDashboard: true }
    },
     
     {
     name: 'productimage',
     path: '/productimage',
     component: ProductImageAdd,
     meta: { hideDashboard: true }
    },
     {
     name: 'producttransfersummery',
     path: '/producttransfersummery/:pname/:brand',
     component: ProductTransferSummery,
     meta: { hideDashboard: true }
    },
     {
     name: 'warehouseproductlist',
     path: '/warehouseproductlist/:location/:code',
     component: WarehouseProductList,
     meta: { hideDashboard: true }
    },
     {
     name: 'fourthcatlist',
     path: '/fourthcatlist/:id',
     component: FourthCategory,
     meta: { hideDashboard: true }
    },
     {
     name: 'supplierstatement',
     path: '/supplierstatement/:id',
     component: SupplierStatement,
     meta: { hideDashboard: true }
    },
     {
     name: 'purchaseproductdetails',
     path: '/purchaseproductdetails/:id',
     component: PurchaseProductDetails,
     meta: { hideDashboard: true }
    },
     {
     name: 'edittransfer',
     path: '/edittransfer/:id',
     component: EditProductTransfer,
     meta: { hideDashboard: true }
    },
     {
     name: 'editwarehouse',
     path: '/editwarehouse/:id',
     component: EditWarehouse,
     meta: { hideDashboard: true }
    },
    {
     name: 'editbusinesstype',
     path: '/editbusinesstype/:id',
     component: EditBusinessType,
     meta: { hideDashboard: true }
    },
     {
     name: 'editpurchasetype',
     path: '/editpurchasetype/:id',
     component: EditPurchaseType,
     meta: { hideDashboard: true }
    },
     {
     name: 'editsupplier',
     path: '/editsupplier/:id',
     component: EditSupplier,
     meta: { hideDashboard: true }
    },
     {
     name: 'editsize',
     path: '/editsize/:id',
     component: EditSizeEntry,
     meta: { hideDashboard: true }
    },
     {
     name: 'editbrand',
     path: '/editbrand/:id',
     component: EditBrand,
     meta: { hideDashboard: true }
    },
     {
     name: 'editcolor',
     path: '/editcolor/:id',
     component: EditColor,
     meta: { hideDashboard: true }
    },
     {
     name: 'editunit',
     path: '/editunit/:id',
     component: EditUnitEntry,
     meta: { hideDashboard: true }
    },
     {
     name: 'editcategory',
     path: '/editcategory/:id',
     component: EditCategory,
     meta: { hideDashboard: true }
    },
     {
     name: 'editabout',
     path: '/editabout/:id',
     component: EditAbout,
     meta: { hideDashboard: true }
    },
     {
     name: 'editpolicy',
     path: '/editpolicy/:id',
     component: EditOrderPolicy,
     meta: { hideDashboard: true }
    },
     {
     name: 'editMenuPermission',
     path: '/editMenuPermission',
     component: EditMenuPermission,
     meta: { hideDashboard: true }
    },
    {
     name: 'editMenu',
     path: '/editMenu/:id',
     component: EditMenu,
     meta: { hideDashboard: true }
     },
    {
     name: 'editterms',
     path: '/editterms/:id',
     component: EditTerms,
     meta: { hideDashboard: true }
     },
    {
     name: 'editfaq',
     path: '/editfaq/:id',
     component: EditFAQ,
     meta: { hideDashboard: true }
     },
    {
     name: 'editprivacy',
     path: '/editprivacy/:id',
     component: EditPrivacy,
     meta: { hideDashboard: true }
     },
    {
     name: 'editslider',
     path: '/editslider/:id',
     component: EditSlider,
     meta: { hideDashboard: true }
     },
    {
     name: 'editadmin',
     path: '/editadmin/:id',
     component: EditAdmin,
     meta: { hideDashboard: true }
     },
    {
     name: 'editSubMenu',
     path: '/editSubMenu/:id',
     component: EditSubMenu,
     meta: { hideDashboard: true }
     },
    {
     name: 'editadmintype',
     path: '/editadmintype/:id',
     component: EditAdminType,
     meta: { hideDashboard: true }
     },

    ];