import React from 'react';
import { Box, Card, CardContent, Typography, Button, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement } from 'chart.js';
import { ArrowForwardIos } from '@mui/icons-material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement);

const Dashboard = ({ notes, tasks, todo }) => {
  const navigate = useNavigate();

  const chartData = {
    labels: ['Tasks', 'Todos', 'Notes'],
    datasets: [
      {
        label: 'Count',
        data: [tasks.length, todo.length, notes.length],
        backgroundColor: ['#3f51b5', '#f50057', '#4caf50'],
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ['Top Priority', 'Average Priority', 'Low Priority'],
    datasets: [
      {
        data: [
          tasks.filter(t => t.task.priority === 'top').length,
          tasks.filter(t => t.task.priority === 'average').length,
          tasks.filter(t => t.task.priority === 'low').length
        ],
        backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
      },
    ],
  };

  const lineData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Tasks Completed',
        data: [3, 5, 2, 8],
        borderColor: '#3f51b5',
        fill: false,
      },
      {
        label: 'Todos Completed',
        data: [1, 4, 3, 7],
        borderColor: '#f50057',
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Overview of Tasks, Todos, and Notes',
      },
    },
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {['Task', 'Todos', 'Notes'].map((item, index) => (
          <Grid item xs={12} md={4} key={item}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" gutterBottom>
                  {item}
                </Typography>
                <Typography variant="h3" component="div" sx={{ mb: 2 }}>
                  {[tasks.length, todo.length, notes.length][index]}
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => navigate(`/Home/${item.toLowerCase()}`)}
                  endIcon={<ArrowForwardIos />}
                  fullWidth
                >
                  View {item}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12} md={6}>
          <Card sx={{ minHeight: '200px', width: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Overview
              </Typography>
              <Box sx={{ height: '200px', width: '100%' }}>
                <Bar data={chartData} options={{ ...chartOptions, maintainAspectRatio: false }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={14} md={6}>
          <Card sx={{width:'100%', height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Priority Breakdown
              </Typography>
              <Box sx={{ height: 200 }}>
                <Pie data={pieData} options={{ maintainAspectRatio: false }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%',width:'100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Progress Over Time
              </Typography>
              <Box sx={{ height: 200 }}>
                <Line data={lineData} options={{ maintainAspectRatio: false }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;