import { Category, Transaction } from "../types";
import { Text } from "react-native";
import Card from "./ui/card";

interface TransactionListItemProps {
  transaction: Transaction;
  categoryInfo: Category | undefined;
}

export default function TransactionListItem({
  transaction,
  categoryInfo,
}: TransactionListItemProps) {
  return (
    <Card>
      <Text>
        {categoryInfo?.name} amount: {transaction.amount}
      </Text>
    </Card>
  );
}
