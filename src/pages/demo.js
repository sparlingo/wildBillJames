import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Layout from '../layouts/Layout'

const colorsList = ['#008f68', '#6db65b', '#4aae9b', '#dfa612'];

const myReviews = [
  {
    name: "Tim's Tacos",
    overall: 9,
    variety: 7,
    price: 8,
    taste: 9
  },
  {
    name: "Noodleville",
    overall: 7,
    variety: 5,
    price: 6,
    taste: 8
  },
  {
    name: "Waffle Shack",
    overall: 6,
    variety: 5,
    price: 4,
    taste: 6
  },
];

let bars = ["overall", "variety", "price", "taste"]


class Demo extends PureComponent {

  render() {
    return (
      <Layout>
        <div style={{ width: '100%', height: 350 }}>
          <ResponsiveContainer>
            <BarChart data={myReviews}>
              <CartesianGrid strokeDasharray="2 2" />
              <XAxis dataKey="name" />
              <YAxis type="number" domain={[0, 10]} />
              <Tooltip />
              <Legend />

              {bars.map((bar, i) => (
                <Bar 
                  dataKey={bar} 
                  fill={colorsList[i]} 
                  key={`bar_${i}`} 
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Layout>
    );
  }
}

export default Demo;