import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import CategoryBarChart from "../components/CategoryBarChart";
import ResponseLineChart from "../components/ResponseLineChart";
import { Typography, Grid, Paper, Stack } from "@mui/material";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import LanguageIcon from "@mui/icons-material/Language";
import Flag from "react-world-flags";

const Dashboard: React.FC = () => {
  const { data, status } = useSelector((state: RootState) => state.ai);

  if (status === "loading") return <Typography>Loading data...</Typography>;
  if (status === "failed") return <Typography>Failed to load data.</Typography>;

  const totalQueries = data?.insight_summary?.total_queries ?? "N/A";
  const successfulQueries = data?.insight_summary?.successful_queries ?? "N/A";
  const failedQueries = data?.insight_summary?.failed_queries ?? "N/A";
  const averageResponseTime =
    data?.insight_summary?.average_response_time ?? "N/A";
  const categoryDistribution = data?.category_distribution ?? [];
  const dayWiseResponseTimes = data?.response_times?.day_wise ?? [];
  const platformUsage = data?.usage_statistics?.by_platform ?? {};
  const countryUsage = data?.usage_statistics?.by_country ?? {};

  return (
    <Grid container className="dashboard-container" sx={{ padding: "16px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper
            className="chart-paper"
            sx={{ padding: "16px", height: "100%" }}
          >
            <Typography variant="h6" className="chart-title">
              Category Distribution
            </Typography>
            <CategoryBarChart data={categoryDistribution} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            className="chart-paper"
            sx={{ padding: "16px", height: "100%" }}
          >
            <Typography variant="h6" className="chart-title">
              Response Times (Day-wise)
            </Typography>
            <ResponseLineChart data={dayWiseResponseTimes} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={6} mb={3}>
        <Grid item xs={12} md={4}>
          <Paper
            className="summary-paper"
            sx={{ padding: "16px", height: "100%" }}
          >
            <Typography variant="h6" className="summary-title">
              Insight Summary
            </Typography>
            <Stack direction="row" alignItems="center" sx={{ gap: "8px" }}>
              <QueryStatsIcon color="primary" />
              <Typography className="summary-text">
                Total Queries: {totalQueries}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" sx={{ gap: "8px" }}>
              <CheckCircleIcon color="success" />
              <Typography className="summary-text">
                Successful Queries: {successfulQueries}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" sx={{ gap: "8px" }}>
              <ErrorIcon color="error" />
              <Typography className="summary-text">
                Failed Queries: {failedQueries}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" sx={{ gap: "8px" }}>
              <AccessTimeIcon color="action" />
              <Typography className="summary-text">
                Average Response Time: {averageResponseTime}s
              </Typography>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            className="usage-paper"
            sx={{ padding: "16px", height: "100%" }}
          >
            <Typography variant="h6" className="usage-title">
              Platform Usage
            </Typography>
            <Stack direction="row" alignItems="center" sx={{ gap: "8px" }}>
              <AppleIcon color="primary" />
              <Typography className="usage-text">
                iOS: {platformUsage.iOS}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" sx={{ gap: "8px" }}>
              <AndroidIcon color="success" />
              <Typography className="usage-text">
                Android: {platformUsage.Android}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" sx={{ gap: "8px" }}>
              <LanguageIcon color="action" />
              <Typography className="usage-text">
                Web: {platformUsage.Web}
              </Typography>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            className="usage-paper"
            sx={{ padding: "16px", height: "100%" }}
          >
            <Typography variant="h6" className="usage-title">
              Usage by Country
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ gap: "8px", marginBottom: "8px" }}
            >
              <Flag code="US" style={{ width: "24px", height: "16px" }} />
              <Typography className="usage-text">
                USA: {countryUsage.USA}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ gap: "8px", marginBottom: "8px" }}
            >
              <Flag code="IN" style={{ width: "24px", height: "16px" }} />
              <Typography className="usage-text">
                India: {countryUsage.India}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ gap: "8px", marginBottom: "8px" }}
            >
              <Flag code="DE" style={{ width: "24px", height: "16px" }} />
              <Typography className="usage-text">
                Germany: {countryUsage.Germany}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ gap: "8px", marginBottom: "8px" }}
            >
              <Flag code="JP" style={{ width: "24px", height: "16px" }} />
              <Typography className="usage-text">
                Japan: {countryUsage.Japan}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ gap: "8px", marginBottom: "8px" }}
            >
              <Flag code="BR" style={{ width: "24px", height: "16px" }} />
              <Typography className="usage-text">
                Brazil: {countryUsage.Brazil}
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
