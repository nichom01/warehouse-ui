import { Routes, Route } from 'react-router-dom'
import { AppLayout } from './components/app-layout'
import Home from './pages/Home'
import NotMatch from './pages/NotMatch'
import Warehouse from './pages/admin/Warehouse'
import Zone from './pages/admin/Zone'
import Location from './pages/admin/Location'
import User from './pages/admin/User'
import UserDetail from './pages/admin/UserDetail'
import Customer from './pages/admin/Customer'
import CustomerDetail from './pages/admin/CustomerDetail'
import Product from './pages/admin/Product'
import ProductDetail from './pages/admin/ProductDetail'
import PurchaseOrder from './pages/inbound/PurchaseOrder'
import GoodsReceived from './pages/inbound/GoodsReceived'
import PutAway from './pages/inbound/PutAway'
import SalesOrders from './pages/outbound/SalesOrders'
import Picking from './pages/outbound/Picking'
import Packing from './pages/outbound/Packing'
import Shipping from './pages/outbound/Shipping'
import Cycles from './pages/maintenance/Cycles'
import StockTake from './pages/maintenance/StockTake'
import Replenishment from './pages/maintenance/Replenishment'

export default function Router() {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="" element={<Home />} />
                <Route path="admin">
                    <Route path="warehouse" element={<Warehouse />} />
                    <Route path="zone" element={<Zone />} />
                    <Route path="location" element={<Location />} />
                    <Route path="user" element={<User />} />
                    <Route path="user/:id" element={<UserDetail />} />
                    <Route path="customers" element={<Customer />} />
                    <Route path="customers/:id" element={<CustomerDetail />} />
                    <Route path="products" element={<Product />} />
                    <Route path="products/:id" element={<ProductDetail />} />
                </Route>
                <Route path="inbound">
                    <Route path="purchase-order" element={<PurchaseOrder />} />
                    <Route path="goods-received" element={<GoodsReceived />} />
                    <Route path="put-away" element={<PutAway />} />
                </Route>
                <Route path="outbound">
                    <Route path="sales-orders" element={<SalesOrders />} />
                    <Route path="picking" element={<Picking />} />
                    <Route path="packing" element={<Packing />} />
                    <Route path="shipping" element={<Shipping />} />
                </Route>
                <Route path="maintenance">
                    <Route path="cycles" element={<Cycles />} />
                    <Route path="stock-take" element={<StockTake />} />
                    <Route path="replenishment" element={<Replenishment />} />
                </Route>
                <Route path="*" element={<NotMatch />} />
            </Route>
        </Routes>
    )
}
