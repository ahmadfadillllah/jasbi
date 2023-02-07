import React from 'react'
import ItemDashboard from './ItemDashboard'
import Order from './Order'

export default function DashboardSection() {
    return (
        <div>
            <div className="content">
                {/* Animated */}
                <div className="animated fadeIn" >
                    <ItemDashboard/>
                    <Order/>
                </div>
            </div>
        </div>
    )
}
