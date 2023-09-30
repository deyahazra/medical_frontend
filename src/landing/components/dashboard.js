import React,{useState} from "react";
const stats = [
    { id: 1, name: 'No of patients this week', value: '44' },
    { id: 2, name: 'No of new Patients', value: '20' },
    { id: 3, name: 'Busiest day', value: 'Wednesday' },
  ] 
const Dashboard = () => {
    return (
        <div className="bg-ivory py-24 sm:py-32 ml-20 mr-20 mt-10 border border-gray-300 stats">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div> 
    )
}
export default Dashboard;