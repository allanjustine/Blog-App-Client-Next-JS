import { NbaLogoProps } from "../types/LogoType";

const teamLogos: { [key: string]: string } = {
  "Atlanta Hawks":
    "https://loodibee.com/wp-content/uploads/nba-atlanta-hawks-logo-300x300.png",
  "Boston Celtics":
    "https://loodibee.com/wp-content/uploads/nba-boston-celtics-logo-300x300.png",
  "Brooklyn Nets":
    "https://loodibee.com/wp-content/uploads/nba-brooklyn-nets-logo-300x300.png",
  "Charlotte Hornets":
    "https://loodibee.com/wp-content/uploads/nba-charlotte-hornets-logo-300x300.png",
  "Chicago Bulls":
    "https://loodibee.com/wp-content/uploads/nba-chicago-bulls-logo-300x300.png",
  "Cleveland Cavaliers":
    "https://loodibee.com/wp-content/uploads/Clevelan-Cavaliers-logo-2022-300x300.png",
  "Dallas Mavericks":
    "https://loodibee.com/wp-content/uploads/nba-dallas-mavericks-logo-300x300.png",
  "Denver Nuggets":
    "https://loodibee.com/wp-content/uploads/nba-denver-nuggets-logo-2018-300x300.png",
  "Detroit Pistons":
    "https://loodibee.com/wp-content/uploads/nba-detroit-pistons-logo-300x300.png",
  "Golden State Warriors":
    "https://loodibee.com/wp-content/uploads/nba-golden-state-warriors-logo-2020-300x300.png",
  "Houston Rockets":
    "https://loodibee.com/wp-content/uploads/nba-houston-rockets-logo-2020-300x300.png",
  "Indiana Pacers":
    "https://loodibee.com/wp-content/uploads/nba-indiana-pacers-logo-300x300.png",
  "LA Clippers":
    "https://loodibee.com/wp-content/uploads/NBA-LA-Clippers-logo-2024-300x300.png",
  "Los Angeles Lakers":
    "https://loodibee.com/wp-content/uploads/nba-los-angeles-lakers-logo-300x300.png",
  "Memphis Grizzlies":
    "https://loodibee.com/wp-content/uploads/nba-memphis-grizzlies-logo-300x300.png",
  "Miami Heat":
    "https://loodibee.com/wp-content/uploads/nba-miami-heat-logo-300x300.png",
  "Milwaukee Bucks":
    "https://loodibee.com/wp-content/uploads/nba-milwaukee-bucks-logo-300x300.png",
  "Minnesota Timberwolves":
    "https://loodibee.com/wp-content/uploads/nba-minnesota-timberwolves-logo-300x300.png",
  "New Orleans Pelicans":
    "https://loodibee.com/wp-content/uploads/nba-new-orleans-pelicans-logo-300x300.png",
  "New York Knicks":
    "https://loodibee.com/wp-content/uploads/nba-new-york-knicks-logo-300x300.png",
  "Oklahoma City Thunder":
    "https://loodibee.com/wp-content/uploads/nba-oklahoma-city-thunder-logo-300x300.png",
  "Orlando Magic":
    "https://loodibee.com/wp-content/uploads/nba-orlando-magic-logo-300x300.png",
  "Philadelphia 76ers":
    "https://loodibee.com/wp-content/uploads/nba-philadelphia-76ers-logo-300x300.png",
  "Phoenix Suns":
    "https://loodibee.com/wp-content/uploads/nba-phoenix-suns-logo-300x300.png",
  "Portland Trail Blazers":
    "https://loodibee.com/wp-content/uploads/nba-portland-trail-blazers-logo-300x300.png",
  "Sacramento Kings":
    "https://loodibee.com/wp-content/uploads/nba-sacramento-kings-logo-300x300.png",
  "San Antonio Spurs":
    "https://loodibee.com/wp-content/uploads/nba-san-antonio-spurs-logo-300x300.png",
  "Toronto Raptors":
    "https://loodibee.com/wp-content/uploads/nba-toronto-raptors-logo-2020-300x300.png",
  "Utah Jazz":
    "https://loodibee.com/wp-content/uploads/utah-jazz-logo-2022-300x300.png",
  "Washington Wizards":
    "https://loodibee.com/wp-content/uploads/nba-washington-wizards-logo-300x300.png",
};

const NbaLogo = ({ teamName }: NbaLogoProps) => {
  const logo =
    teamLogos[teamName] ||
    "https://loodibee.com/wp-content/uploads/nba-logo-transparent-300x300.png";

  return <img src={logo} alt={`${teamName} logo`} />;
};

export default NbaLogo;
