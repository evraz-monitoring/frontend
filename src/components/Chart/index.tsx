import React from "react";

// @ts-ignore
import { EChart } from "@hcorta/react-echarts";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { DATA } from "./mock";
import { useExchausterHistoricalState } from "../../hooks/useExchausterHistoricalState";
import { useParams } from "react-router-dom";
import { SignalKey } from "../../models/Exchauster";
import { useDispatch } from "react-redux";
import { getHistoricalExchausterState } from "../../redux/store/exchausters/actions";
import dayjs from "dayjs";

const symbolSize = 20;
const data = [
    [40, -10],
    [-30, -5],
    [-76.5, 20],
    [-63.5, 40],
    [-22.1, 50],
];

const MIN_IN_MS = 60 * 1000;

interface ChartProps {
    checkedKeys: SignalKey[];
}
export const Chart: React.FC<ChartProps> = ({ checkedKeys }) => {
    const { id } = useParams();
    const { data: _data } = useExchausterHistoricalState(+(id || 0));
    const series = React.useMemo(() => {
        return checkedKeys.map((key) => ({
            name: key,
            type: "line",
            data: _data.map((item) => item.data[key]?.toFixed(2)),
        }));
    }, [_data, checkedKeys]);

    const xAxis = React.useMemo(
        () => _data.map((item) => item && dayjs(item?.ts * 1000).format("DD MMM HH:mm")),
        [_data]
    );

    return (
        <EChart
            style={{ height: "700px", width: '1430px' }}
            grid={{}}
            xAxis={{
                data: xAxis,
                type: "category",
            }}
            yAxis={{}}
            tooltip={{
                trigger: "axis",
                formatter: (params: {
                    seriesName: string;
                    value: number;
                    name: string;
                }) => {
                    console.log(params);
                    return "hello";
                },
            }}
            dataZoom={[
                {
                    type: "slider",
                    xAxisIndex: 0,
                    filterMode: "none",
                },
                {
                    type: "slider",
                    yAxisIndex: 0,
                    filterMode: "none",
                },
                // {
                //     type: "inside",
                //     xAxisIndex: 0,
                //     filterMode: "none",
                // },
                // {
                //     type: "inside",
                //     yAxisIndex: 0,
                //     filterMode: "none",
                // },
            ]}
            series={series}
        />
    );
    // return (
    //     <LineChart
    //         width={1500}
    //         height={700}
    //         data={DATA}
    //         margin={{
    //             top: 5,
    //             right: 30,
    //             left: 20,
    //             bottom: 5,
    //         }}
    //     >
    //         <Legend verticalAlign="top" height={36} />

    //         <CartesianGrid strokeDasharray="3 3" />
    //         <XAxis dataKey="name" />
    //         <YAxis />
    //         <Tooltip />
    //         <Line
    //             type="monotone"
    //             dataKey="pv"
    //             stroke="#8884d8"
    //             activeDot={{ r: 8 }}
    //         />
    //         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    //     </LineChart>
    // );
};
