import NetInfo from "@react-native-community/netinfo";

const networkState = await NetInfo.fetch();

export default async function getConnection() {
  const connection = await NetInfo.fetch();
  return connection.isConnected;
}
