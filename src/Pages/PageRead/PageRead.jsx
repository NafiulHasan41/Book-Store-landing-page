import { shape } from "prop-types";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const PageRead = () => {
    const books = useLoaderData();


  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
     Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke={books.hexColor} fill={fill} />;
  };

  const CustomizedAxisTick = ({ x, y, stroke, payload }) => (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
        {payload.value}
      </text>
    </g>
  );

  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => (
    <text x={x + width / 2} y={y} fill={books.hexColor} textAnchor="middle" dy={-6}>{`${value}`}</text>
  );



  return (
    <div className="p-5 items-center mx-auto h-[600px]">
      <BarChart className="mx-auto items-center" width={600} height={300} data={books} margin={{ top: 5, right: 20, left: 10, bottom: 20 }}>
        <XAxis dataKey="bookName" tick={<CustomizedAxisTick />} />
        <YAxis />
        <Bar dataKey="totalPages" shape={<TriangleBar />} label={renderCustomBarLabel}>
          {books.map((book, index) => (
            <Bar key={index} dataKey="totalPages" fill={book.hexColor} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default PageRead;