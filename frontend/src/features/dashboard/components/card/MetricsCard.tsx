import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface IMetricsCardPropsType {
  title: string;
  value: string;
}
const MetricsCard = ({ title, value }: IMetricsCardPropsType) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p>{value}</p>
      </CardContent>
    </Card>
  );
};

export default MetricsCard;
