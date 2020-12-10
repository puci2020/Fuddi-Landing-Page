import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

import zdj1 from "../../img/blog/posts/post2/rodzina_wspolnie_kobiety_park_ekologia_fuddi.jpeg";
import zdj2 from "../../img/blog/posts/post2/dzielenie_sie_pomidory_szczescie_razem_targowisko_zdrowa_zywnosc_fuddi.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 20,
    maxWidth: 1000,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    "@media (max-width: 500px)": {
      maxWidth: "90vw"
    }
  },
  media: {
    height: 0,
    maxWidth: 1000,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  title: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  subheader: {
    fontSize: ".7rem",
  },
  imageContent: {
    margin: "auto",
    width: "100%",
    height: "auto",
    maxWidth: 700,
  },
  paragraph: {
    textAlign: "justify",
  },
  imgWrapper: {
    marginTop: 30,
    marginBottom: 30,
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
  },
}));

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: black;

//   &:focus,
//   &:hover,
//   &:visited,
//   &:link,
//   &:active {
//     text-decoration: none;
//   }
// `;

const Post2 = ({ id, head, date, img, shortDesc, longDesc }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    // <Card className={classes.root}>
    //     <StyledLink to={'blog/' + id} >
    //         <CardHeader
    //             className={classes.header}
    //             // avatar={<Avatar aria-label="recipe" className={classes.avatar}>
    //             //     R
    //             // </Avatar>}
    //             action={
    //                 <IconButton aria-label="settings">
    //                     {/*<MoreVertIcon />*/}
    //                 </IconButton>
    //             }
    //             title={<span className={classes.title}>{head}</span> }
    //             subheader={<span className={classes.subheader}>September 14, 2016</span> }
    //         />

    //         <CardMedia
    //             className={classes.media}
    //             image={image}
    //             title="Paella dish"
    //         />
    //         <CardContent>
    //             <Typography variant="body2" color="textSecondary" component="p">
    //                 This impressive paella is a perfect party dish and a fun meal to cook together with your
    //                 guests. Add 1 cup of frozen peas along with the mussels, if you like.
    //             </Typography>
    //         </CardContent>
    //     </StyledLink>
    //     <CardActions disableSpacing>
    //         <IconButton aria-label="add to favorites">
    //             <FavoriteIcon/>
    //         </IconButton>
    //         <IconButton aria-label="share">
    //             <ShareIcon/>
    //         </IconButton>
    //         <IconButton
    //             className={clsx(classes.expand, {
    //                 [classes.expandOpen]: expanded,
    //             })}
    //             onClick={handleExpandClick}
    //             aria-expanded={expanded}
    //             aria-label="show more"
    //         >
    //             <ExpandMoreIcon/>
    //         </IconButton>
    //     </CardActions>
    //     <Collapse in={expanded} timeout="auto" unmountOnExit>
    //         <CardContent>
    //             <Typography paragraph>Method:</Typography>
    //             <Typography paragraph>
    //                 Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
    //                 minutes.
    //             </Typography>
    //             <Typography paragraph>
    //                 Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
    //                 heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
    //                 browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
    //                 and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
    //                 pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
    //                 saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
    //             </Typography>
    //             <Typography paragraph>
    //                 Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
    //                 without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
    //                 medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
    //                 again without stirring, until mussels have opened and rice is just tender, 5 to 7
    //                 minutes more. (Discard any mussels that don’t open.)
    //             </Typography>
    //             <Typography>
    //                 Set aside off of the heat to let rest for 10 minutes, and then serve.
    //             </Typography>
    //         </CardContent>
    //     </Collapse>
    // </Card>
    <Card className={classes.root}>
      {/* <StyledLink to={'blog/' + id} > */}
      <CardHeader
        className={classes.header}
        // avatar={<Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        // </Avatar>}
        action={
          <IconButton aria-label="settings">{/*<MoreVertIcon />*/}</IconButton>
        }
        title={<span className={classes.title}>{head}</span>}
        subheader={<span className={classes.subheader}>{date}</span>}
      />

      <CardMedia className={classes.media} image={img} title="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {shortDesc}
        </Typography>
      </CardContent>
      {/* </StyledLink> */}
      <CardActions disableSpacing>
        <Button onClick={handleExpandClick} variant="contained" color="primary">
          Czytaj więcej
        </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <h4>Czym jest ekonomia współdzielenia?</h4>
          </Typography>
          <Typography paragraph>
            <p className={classes.paragraph}>
              Ekonomia współdzielenia (ang. sharing economy) nazywana w Polsce
              także “ekonomią współpracy” lub “ekonomią dzielenia się” jest
              zjawiskiem społeczno-ekonomicznym. Filozofią tego zjawiska mogą
              być słowa “lepiej współdzielić niż posiadać”, ludzie coraz
              częściej widzą, że posiadanie jakiejś rzeczy nie jest optymalne,
              ani opłacalne w dłuższym okresie czasowym. Dlatego szybko na
              popularności zyskują rozwiązania, w których osoby zainteresowane
              współdzielą ze sobą mieszkania, samochody, hulajnogi, narzędzia, a
              kolejne pomysły już czekają.
            </p>
          </Typography>
          <Typography paragraph>
            <h4>Ekonomia współpracy a naturalne skłonności człowieka</h4>
          </Typography>
          <Typography paragraph>
            <p className={classes.paragraph}>
              Ideą ekonomii dzielenia, są rozproszone sieci połączonych z sobą
              ludzi lub społeczności, które mogą świadczyć wzajemne usługi,
              współużytkować, współtworzyć rozwiązania czy robić wspólnie zakupy
              itp. Podejście takie pozwala radykalnie zwiększyć efektywność
              wykorzystania zasobów. Zjawisko bazuje na naturalnej ludzkiej
              skłonności do współpracy, altruizmu i dzielenia się swoim czasem,
              zasobami i umiejętnościami, które mogą być w różny sposób
              materialny lub pozamaterialny odwzajemnione.
            </p>
            <div className={classes.imgWrapper}>
              <img src={zdj1} className={classes.imageContent} alt="zdj1" />
            </div>
            <p className={classes.paragraph}>
              Przed erą masowej produkcji, globalizacji i kapitalizmu
              finansowego, forma takiej współpracy była kultywowana w rodzinach
              i lokalnych społecznościach, lecz wraz z coraz silniejszą migracją
              ludzi do miast i masowej produkcji sieci kontaktów ulegały
              zacieraniu, a zjawisko współpracy traciło na znaczeniu. Naturalną
              funkcję współdziałania próbowały przejąć różne przedsiębiorstwa i
              instytucje (np. publiczne), ale chyba możemy się wszyscy
              utożsamiać z tym, że takie inicjatywy powinny wychodzić oddolnie i
              nie powinny być narzucane na nas z góry.
            </p>
            <p className={classes.paragraph}>
              Druga strona człowieka jest z natury konkurencyjna i dbająca o
              własne wąsko pojęte interesy. Podejście to, jest podstawa ekonomii
              klasycznej, ale w warunkach gospodarki rynkowej czasami doprowadza
              do wyczerpań (wyzysku, oszustw itd.). Dzięki postępowi w nauce,
              nowe technologie mają wpływ na wzrost świadomości i popularność
              ekonomii współdzielenia. Pierwszym katalizatorem, zjawiska był
              kryzys finansowy z roku 2008, który pokazał, że panujący na
              świecie kapitalizm nie jest najlepszą formą współdziałania
              człowieka. Obecna sytuacja na świecie każe zastanowić się nam raz
              jeszcze nad tym, jak chcemy, aby wyglądała nasza przyszłość.
            </p>
          </Typography>

          <Typography paragraph>
            <h4>Współczesny model gospodarczy</h4>
          </Typography>
          <Typography paragraph>
            <p className={classes.paragraph}>
              Współcześnie w gospodarce dominuje model ekonomiczny jeden do
              wielu, czyli jedno przedsiębiorstwo wytwarza jakieś dobro lub
              usługę i sprzedaje je do wielu klientom. Ekonomia współdzielenia
              polega na świadczeniu usług w relacji człowiek-człowiek lub
              wspólnej pracy nad jakimś celem, podejście takie nosi miano modelu
              rozproszonego.
            </p>
            <p className={classes.paragraph}>
              Drogi czytelniku, zapewne spotkałeś się nieraz ze stwierdzeniami,
              “...łańcuchy dostaw zostały nadszarpnięte…”, “Musimy myśleć o tym,
              aby produkcja była bardziej rozsiana, aby nasze rodzime
              przedsiębiorstwa miały skąd zaopatrywać się w produkty niezbędne
              do ich niezachwianego działania.”. Właśnie między innymi dlatego
              musimy myśleć i tworzyć grupy, zespoły osób, które będą nastawione
              na współpracę i wspólny rozwój, a niekoniecznie jedynie na
              gromadzenie kapitału i zdobywanie wpływu.
            </p>
          </Typography>
          <Typography paragraph>
            <h4>Ekonomia współdzielenia, a biznes</h4>
          </Typography>
          <Typography paragraph>
            <p className={classes.paragraph}>
              W miastach istnieją obecnie ogromne platformy, które pozwalają na
              współdzielenie m.in. aut, hulajnóg czy mieszkań. Inwestorzy widząc
              potencjał w sharing economy, inwestują swój kapitał w platformy
              prowadząc do ich profesjonalizacji. To powoduje, że platformy te,
              stają się w gruncie rzeczy kolejnymi firmami, które pod przykrywką
              współdzielenia nastawione są przede wszystkim na zysk. Ponadto,
              profesjonalizacja ta doprowadza do poważnych zmian. Airbnb
              spowodował spadek podaży mieszkań na długoterminowy wynajem czy
              wzrost cen mieszkań w dużych miastach. Transport samochodowy także
              ma swoją ciemną stronę, do której można zaliczyć np. brak
              zabezpieczeń społecznych dla kierowców.
            </p>
          </Typography>
          <Typography paragraph>
            <h4>Idea współpracy - kooperatywy, spółdzielnie i nie tylko</h4>
          </Typography>
          <Typography paragraph>
            <p className={classes.paragraph}>
              Alternatywami dla korporacyjnego modelu prowadzenia
              przedsięwzięcia jest platformowy kooperatyzm, który polega na
              tworzeniu spółdzielni, do których wnosimy jakieś dobro czy
              umiejętności, ale także jesteśmy jej współwłaścicielem. Decyzje
              oraz kierunki działań podejmowane są przez wszystkich członków
              takiego przedsięwzięcia, dzięki czemu, jesteśmy w stanie
              ograniczyć także wpływ pośredników. Warto przyjrzeć się innym
              przedsięwzięciom mniejszym niż Uber, Bolt, czy Airbnb.Przykładami
              takich przedsięwzięć mogą być kooperatywy żywnościowe lub
              zrzeszenia specjalistów. Więcej na ten temat tutaj. [ tu będzie
              link do artykułu o kooperatywach]
            </p>
            <div className={classes.imgWrapper}>
              <img src={zdj2} className={classes.imageContent} alt="zdj2" />
            </div>
            <p className={classes.paragraph}>
              Zaciekawiła Cię idea sharing economy? Być może coś podobnego
              dzieje się w Twojej okolicy? Sprawdź, poszukaj, śledź różne
              fanpage - tam także można znaleźć dodatkową inspirację. Pamiętaj
              że nawet małe działanie wielu osób może mieć wielki wpływ ma
              świat. Zachęcamy do śledzenia naszych mediów społecznościowych, na
              których znajdziesz ciekawe informacje na temat ekonomii
              współdzielenia i nie tylko:
            </p>
            <a
              href="https://www.facebook.com/Fuddi-107367687746824"
              target="_blank"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/fuddiplace/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/marketfuddi/" target="_blank">
              <InstagramIcon />
            </a>

            <p className={classes.paragraph}>
              Sprawdź też naszą platformę, która tworzona jest z myślą o
              łączeniu i popularyzacji idei współpracy. W Fuddi.pl kupisz tam
              już niedługo świeże produkty rolne bezpośrednio od rolnika -
              dzięki czemu Ty będziesz mieć u siebie wysokiej jakości warzywa i
              owoce, a gospodarstwo rolne uzyska rozsądną cenę za swoje
              produkty.
            </p>
          </Typography>
          <Typography paragraph>
            <h4>Źródła:</h4>
          </Typography>
          <Typography paragraph>
            <ul>
              <li>
                <a
                  href="https://pl.wikipedia.org/wiki/Ekonomia_wsp%C3%B3%C5%82pracy "
                  target="_blank"
                >
                  https://pl.wikipedia.org/wiki/Ekonomia_wsp%C3%B3%C5%82pracy
                </a>
              </li>
              <li>
                <a
                  href="https://innpoland.pl/153351,sharing-economy-co-bedziemy-wspoldzielic-w-przyszlosci "
                  target="_blank"
                >
                  https://innpoland.pl/153351,sharing-economy-co-bedziemy-wspoldzielic-w-przyszlosci{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.moneycrashers.com/sharing-economy/ "
                  target="_blank"
                >
                  https://www.moneycrashers.com/sharing-economy/
                </a>
              </li>
            </ul>
          </Typography>
          <Typography paragraph>
            <p className={classes.paragraph}>
              Grafiki autorstwa, Artem Podrez, Andrea Piacquadio, fauxels z
              Pexels
            </p>
          </Typography>
          <Typography paragraph>
            <p className={classes.paragraph}>
              Czas leci do przodu, przyzwyczajenia się zmieniają, a co za tym
              idzie? Wymyślane są nowe rozwiązania, które usprawniają każdą
              część naszej codzienności. Jednym z ruchów, który zaczyna
              kształtować dyskurs społeczny i ma coraz większy wpływ na
              gospodarkę jest tak zwana ekonomia współdzielenia.
            </p>

            <p className={classes.paragraph}>
              Ekonomia współdzielenia (ang. sharing economy) nazywana w Polsce
              także “ekonomią współpracy” lub “ekonomią dzielenia się” jest
              zjawiskiem społeczno-ekonomicznym. Filozofią tego zjawiska mogą
              być słowa “lepiej współdzielić niż posiadać”, ludzie coraz
              częściej widzą, że posiadanie jakiejś rzeczy nie jest optymalne,
              ani opłacalne w dłuższym okresie czasowym. Dlatego szybko na
              popularności zyskują rozwiązania, w których osoby zainteresowane
              współdzielą ze sobą mieszkania, samochody, hulajnogi, narzędzia, a
              kolejne pomysły już czekają.
            </p>
            <p className={classes.paragraph}>
              Ideą ekonomii dzielenia, są rozproszone sieci połączonych z sobą
              ludzi lub społeczności, które mogą świadczyć wzajemne usługi,
              współużytkować, współtworzyć rozwiązania czy robić wspólnie zakupy
              itp. Podejście takie pozwala radykalnie zwiększyć efektywność
              wykorzystania zasobów. Zjawisko bazuje na naturalnej ludzkiej
              skłonności do współpracy, altruizmu i dzielenia się swoim czasem,
              zasobami i umiejętnościami, które mogą być w różny sposób
              materialny lub pozamaterialny odwzajemnione. Przed erą masowej
              produkcji, globalizacji i kapitalizmu finansowego, forma takiej
              współpracy była kultywowana w rodzinach i lokalnych
              społecznościach, lecz wraz z coraz silniejszą migracją ludzi do
              miast i masowej produkcji sieci kontaktów ulegały zacieraniu, a
              zjawisko współpracy traciło na znaczeniu. Naturalną funkcję
              współdziałania próbowały przejąć różne przedsiębiorstwa i
              instytucje (np. publiczne), ale chyba możemy się wszyscy
              utożsamiać z tym, że takie inicjatywy powinny wychodzić oddolnie i
              nie powinny być narzucane na nas z góry.
            </p>
            <p className={classes.paragraph}>
              Druga strona człowieka jest z natury konkurencyjna i dbająca o
              własne wąsko pojęte interesy. Podejście to, jest podstawa ekonomii
              klasycznej, ale w warunkach gospodarki rynkowej czasami doprowadza
              do wyczerpań (wyzysku, oszustw itd.). Dzięki postępowi w nauce,
              nowe technologie mają wpływ na wzrost świadomości i popularność
              ekonomii współdzielenia. Pierwszym katalizatorem, zjawiska był
              kryzys finansowy z roku 2008, który pokazał, że panujący na
              świecie kapitalizm nie jest najlepszą formą współdziałania
              człowieka. Obecna sytuacja na świecie każe zastanowić się nam raz
              jeszcze nad tym, jak chcemy, aby wyglądała nasza przyszłość.
            </p>
            <p className={classes.paragraph}>
              Współcześnie w gospodarce dominuje model ekonomiczny jeden do
              wielu, czyli jedno przedsiębiorstwo wytwarza jakieś dobro lub
              usługę i sprzedaje je do wielu klientom. Ekonomia współdzielenia
              polega na świadczeniu usług w relacji człowiek-człowiek lub
              wspólnej pracy nad jakimś celem, podejście takie nosi miano modelu
              rozproszonego. Drogi czytelniku, zapewne spotkałeś się nieraz ze
              stwierdzeniami, “...łańcuchy dostaw zostały nadszarpnięte…”,
              “Musimy myśleć o tym, aby produkcja była bardziej rozsiana, aby
              nasze rodzime przedsiębiorstwa miały skąd zaopatrywać się w
              produkty niezbędne do ich niezachwianego działania.”. Właśnie
              między innymi dlatego musimy myśleć i tworzyć grupy, zespoły osób,
              które będą nastawione na współpracę i wspólny rozwój, a nie
              koniecznie na gromadzenie kapitału i zdobywanie wpływu.
            </p>
            <p className={classes.paragraph}>
              Ekonomia współdzielenia, a tradycyjne firmy W miastach istnieją
              obecnie ogromne platformy, które pozwalają na współdzielenie m.in.
              aut, hulajnóg czy mieszkań. Inwestorzy widząc potencjał w sharing
              economy, inwestują swój kapitał w platformy prowadząc do ich
              profesjonalizacji, ale co za tym idzie. Platformy te, stają się w
              gruncie rzeczy kolejnymi firmami, które pod przykrywką
              współdzielenia nastawione są na zysk. Ponadto, profesjonalizacja
              ta doprowadza do poważnych zmian, Airbnb spowodował spadek podaży
              mieszkań na długoterminowy wynajem czy wzrost cen mieszkań w
              dużych miastach. Transport samochodowy także ma swoją ciemną
              stronę, do której można zaliczyć np. brak zabezpieczeń społecznych
              dla kierowców. Alternatywami dla korporacyjnego modelu prowadzenia
              przedsięwzięcia jest platformowy kooperatyzm, który polega na
              tworzeniu spółdzielni, do których wnosimy jakieś dobro czy
              umiejętności, ale także jesteśmy jej współwłaścicielem. Decyzje
              oraz kierunki działań podejmowane są przez wszystkich członków
              takiego przedsięwzięcia, dzięki czemu, jesteśmy w stanie
              ograniczyć także wpływ pośredników. Warto przyjrzeć się innym
              przedsięwzięciom mniejszym niż Uber, Bolt, czy Airbnb.Przykładami
              takich przedsięwzięć mogą być kooperatywy żywnościowe lub
              zrzeszenia specjalistów. Więcej na ten temat tutaj. [ tu będzie
              link do artykułu o kooperatywach]
            </p>
            <p className={classes.paragraph}>
              Podsumowując warto, abyś drogi czytelniku, czytelniczko zapoznał/a
              się z tym trendem i czy akurat coś podobnego nie powstaje w Twojej
              okolicy. Warto śledzić różne fanpage i udzielać się, ponieważ
              nawet małe działanie wielu osób może mieć wielki wpływ ma świat.
            </p>
          </Typography>
          <Typography paragraph>
            <p>
              Ze swojej strony zachęcam do śledzenia naszych mediów
              społecznościowych:
            </p>
            <a
              href="https://www.facebook.com/Fuddi-107367687746824"
              target="_blank"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/fuddiplace/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
            <p>
              Oraz do korzystania z naszej platformy, która tworzona jest z
              myślą o łączeniu i współpracy.
            </p>
          </Typography>
          <Typography paragraph>
            <h4>Źródła:</h4>
          </Typography>
          <Typography paragraph>
            <ul>
              <li>
                <a
                  href="https://pl.wikipedia.org/wiki/Ekonomia_wsp%C3%B3%C5%82pracy "
                  target="_blank"
                >
                  https://pl.wikipedia.org/wiki/Ekonomia_wsp%C3%B3%C5%82pracy
                </a>
              </li>
              <li>
                <a
                  href="https://innpoland.pl/153351,sharing-economy-co-bedziemy-wspoldzielic-w-przyszlosci "
                  target="_blank"
                >
                  https://innpoland.pl/153351,sharing-economy-co-bedziemy-wspoldzielic-w-przyszlosci
                </a>
              </li>
            </ul>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Post2;
