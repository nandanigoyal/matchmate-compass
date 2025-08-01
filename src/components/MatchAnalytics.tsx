import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar } from "recharts";

interface MatchData {
  anon_id: string;
  match_score: number;
  criteria_scores: {
    cleanliness: number;
    sleep_schedule: number;
    social_habits: number;
    lifestyle: number;
    food: number;
  };
  chatroom_passkey: string;
}

interface MatchAnalyticsProps {
  matches: MatchData[];
}

const MatchAnalytics = ({ matches }: MatchAnalyticsProps) => {
  // Prepare data for radar chart - average scores across all matches
  const avgCriteriaData = [
    {
      criteria: "Cleanliness",
      value: Math.round(matches.reduce((sum, match) => sum + match.criteria_scores.cleanliness, 0) / matches.length),
      fullMark: 100,
    },
    {
      criteria: "Sleep",
      value: Math.round(matches.reduce((sum, match) => sum + match.criteria_scores.sleep_schedule, 0) / matches.length),
      fullMark: 100,
    },
    {
      criteria: "Social",
      value: Math.round(matches.reduce((sum, match) => sum + match.criteria_scores.social_habits, 0) / matches.length),
      fullMark: 100,
    },
    {
      criteria: "Lifestyle",
      value: Math.round(matches.reduce((sum, match) => sum + match.criteria_scores.lifestyle, 0) / matches.length),
      fullMark: 100,
    },
    {
      criteria: "Food",
      value: Math.round(matches.reduce((sum, match) => sum + match.criteria_scores.food, 0) / matches.length),
      fullMark: 100,
    },
  ];

  // Prepare data for match score distribution
  const matchScoreData = matches.map((match, index) => ({
    match: match.anon_id.split('#')[1],
    score: match.match_score,
    rank: index + 1,
  }));

  // Prepare data for criteria variation chart
  const criteriaVariationData = [
    {
      criteria: "Cleanliness",
      min: Math.min(...matches.map(m => m.criteria_scores.cleanliness)),
      max: Math.max(...matches.map(m => m.criteria_scores.cleanliness)),
      avg: Math.round(matches.reduce((sum, match) => sum + match.criteria_scores.cleanliness, 0) / matches.length),
    },
    {
      criteria: "Sleep",
      min: Math.min(...matches.map(m => m.criteria_scores.sleep_schedule)),
      max: Math.max(...matches.map(m => m.criteria_scores.sleep_schedule)),
      avg: Math.round(matches.reduce((sum, match) => sum + match.criteria_scores.sleep_schedule, 0) / matches.length),
    },
    {
      criteria: "Social",
      min: Math.min(...matches.map(m => m.criteria_scores.social_habits)),
      max: Math.max(...matches.map(m => m.criteria_scores.social_habits)),
      avg: Math.round(matches.reduce((sum, match) => sum + match.criteria_scores.social_habits, 0) / matches.length),
    },
    {
      criteria: "Lifestyle",
      min: Math.min(...matches.map(m => m.criteria_scores.lifestyle)),
      max: Math.max(...matches.map(m => m.criteria_scores.lifestyle)),
      avg: Math.round(matches.reduce((sum, match) => sum + match.criteria_scores.lifestyle, 0) / matches.length),
    },
    {
      criteria: "Food",
      min: Math.min(...matches.map(m => m.criteria_scores.food)),
      max: Math.max(...matches.map(m => m.criteria_scores.food)),
      avg: Math.round(matches.reduce((sum, match) => sum + match.criteria_scores.food, 0) / matches.length),
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Compatibility Overview - Radar Chart */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground flex items-center">
            📊 Compatibility Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={240}>
            <RadarChart data={avgCriteriaData}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis 
                dataKey="criteria" 
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
              />
              <Radar
                name="Average Score"
                dataKey="value"
                stroke="hsl(var(--accent))"
                fill="hsl(var(--accent))"
                fillOpacity={0.3}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Match Score Distribution */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground flex items-center">
            📈 Match Scores
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={matchScoreData}>
              <XAxis 
                dataKey="match" 
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis 
                domain={[0, 100]}
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="hsl(var(--warm-brown))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--warm-brown))", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: "hsl(var(--accent))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Criteria Variation */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground flex items-center">
            📊 Score Variations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={criteriaVariationData} layout="horizontal">
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} />
              <YAxis 
                type="category" 
                dataKey="criteria" 
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                width={60}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
                formatter={(value, name) => [
                  `${value}%`,
                  name === 'min' ? 'Minimum' : name === 'max' ? 'Maximum' : 'Average'
                ]}
              />
              <Bar dataKey="min" fill="hsl(var(--muted))" name="min" />
              <Bar dataKey="avg" fill="hsl(var(--accent))" name="avg" />
              <Bar dataKey="max" fill="hsl(var(--warm-brown))" name="max" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchAnalytics;