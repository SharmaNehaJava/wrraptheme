import { useState, useEffect } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const Analytics = () => {
    const [stats, setStats] = useState([
        { title: "Now Inside", value: 351 },
        { title: "Surgery", value: 24 },
        { title: "Total Visitors", value: "32k" },
        { title: "Happy Clients", value: 780 }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(stats.map(stat => ({ ...stat, value: Math.floor(Math.random() * 1000) })));
        }, 5000);
        return () => clearInterval(interval);
    }, [stats]);

    const revenueData = [
        { date: "Aug 20", revenue: 400, expense: 200 },
        { date: "Aug 22", revenue: 600, expense: 300 },
        { date: "Aug 25", revenue: 500, expense: 250 },
        { date: "Aug 30", revenue: 800, expense: 400 }
    ];

    return (
        <div className="p-5 grid grid-cols-4 gap-4">
            {/* Stats Boxes */}
            <div className="col-span-1 space-y-4">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white shadow-md p-4 rounded-lg">
                        <h3 className="text-lg font-semibold">{stat.title}</h3>
                        <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Revenue & Graph */}
            <div className="col-span-3 bg-white shadow-md p-4 rounded-lg">
                <h2 className="p-2 text-xl font-normal" style={{color: '#323A45'}}>Total Revenue</h2>
                <div className="grid grid-cols-3 gap-4 py-4">
                    <div className="bg-green-200 p-3 rounded">$7,12,326</div>
                    <div className="bg-blue-200 p-3 rounded">$25,965</div>
                    <div className="bg-red-200 p-3 rounded">$14,965</div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={revenueData}>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="expense" stroke="#ff0000" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Analytics;
