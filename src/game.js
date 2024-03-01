//
export default function showHealth(players) {
  let healthStatus = 'critical';
  if (players.health > 50) {
    healthStatus = 'healthy';
  }
  if (players.health > 15 && players.health <= 50) {
    healthStatus = 'wounded';
  }
  return healthStatus;
}
