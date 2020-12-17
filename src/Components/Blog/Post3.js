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

import zdj1 from "../../img/blog/posts/post3/1.jpeg";
import zdj2 from "../../img/blog/posts/post3/2.jpeg";
import zdj3 from "../../img/blog/posts/post3/3.jpeg";
import zdj4 from "../../img/blog/posts/post3/4.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 20,
    maxWidth: 1000,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    "@media (max-width: 500px)": {
      maxWidth: "90vw",
    },
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
    marginBottom: 10
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

const Post3 = ({ id, head, date, img, shortDesc, longDesc }) => {
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
            <p className={classes.paragraph}>
              Ktoś kiedyś powiedział "Lecz czymże jest każdy ocean, jeśli nie
              morzem kropel?". Tak samo jak ocean jest zbudowany z kropelek wody
              tak i nasze zakupy, Twoje, moje, osób z sąsiedniej ulicy, itd.
              składają na potężną ilość kapitału, która wędrując w gospodarce
              wspiera jedne firmy, a inne pomija. My wspólnie kreujemy naszą
              rzeczywistość. Finalnie to, które przedsiębiorstwa, którzy
              producenci zostaną na rynku zależy od nas. Skoro tak to czy nie
              lepiej byłoby kupować rozsądnie i przez to w miarę możliwości
              wspierać krajowe lub lokalne firmy i producentów rolnych?
            </p>
          
            <p className={classes.paragraph}>
              W naszym krótkim artykul zobaczysz grafiki, na ktorych zostało
              pokazane co się dzieje gdy kupujesz jedynie od zagranicznych
              korporacji i jakie to ma konsekwencje dla krajowego dobrobytu. Czy
              warto być patriotą gospodarczym? Według nas zdecydowanie tak. A
              według Ciebie?
            </p>
            <p className={classes.paragraph}>
              A może jesteś rolnikiem i chciałbyś włączyć się w rozwój projektu
              Fuddi.pl? Jeśli tak to zapraszamy do kontaktu poprzez maila
              fuddi.kontakt@gmail.pl lub przez wiadomość prywatną na Facebook’u.
            </p>
            <p className={classes.paragraph}>
              Jeśli to czytasz drogi czytelniku zapewne Twoim głównym źródłem
              informacji jest Internet, wiesz zapewne, że tradycyjne media są
              tendencyjne, a media społecznościowe mają trend zamykania nas w
              bańkach informacyjnych. Zanim przejdziemy do głównego wątku tego
              artykułu chciałbym podzielić się z Tobą kilkoma moimi refleksjami
              na temat sam wiesz jaki, a jak nie to po przeczytaniu artykułu
              myślę się wszystko rozjaśni. Jakiś czas temu na mediach
              społecznościowych AgroUni pojawił się taki oto krótki filmik -
              <a href="https://www.youtube.com/watch?v=Z4a718WsWs0">
                https://www.youtube.com/watch?v=Z4a718WsWs0
              </a>
              , oczywiście w mainstreamowych mediach nic, a nic. Inna sprawa to
              kroki jakie podejmuje jeden z większych portali aukcyjnych w
              Polsce, z pozycji jaką posiada wprowadza dyskusyjne techniki
              marketingowo-sprzedażowe.
            </p>
            <p className={classes.paragraph}>
              Przejdźmy w tym momencie do clue tego wpisu, zadajmy sobie na
              początku pytanie co się dzieje, gdy każdy sobie rzepkę skrobie, a
              co jak działamy wspólnie? Przyjrzyjmy się poniższej grafice.
              Wyobraźmy sobie.. zachodnia korporacja, która posiada niezwykle
              wielki kapitał, wspierana jest przez własny rząd, zaczyna
              realizować swoją kampanię wzrostu i co się z tym wiąże chce wyjść
              poza granice granice swojego kraju. W pierwszej kolejności
              rozpoczyna od prac badawczo-projektowych, czyli znalezienie
              “najlepszych” miejsc pod budowę, poznanie prawa, aby jak
              najbardziej zoptymalizować podatki.
            </p>

            <div className={classes.imgWrapper}>
              <img src={zdj1} className={classes.imageContent} alt="zdj1" />
            </div>
            <p className={classes.paragraph}>
              Kolejnym etapem jest pozyskanie lokalnego “taniego” pracownika,
              który na zagranicznym sprzęcie i produktach zbuduje sobie maszynkę
              zubażania własnego społeczeństwa. Przedsiębiorstwo takie zaczyna
              pompować niewyobrażalne fundusze w marketing, obniża cenę swoich
              produktów/usług, aby wykończyć mniejszą konkurencję. Pieniądze
              zaczynają spływać, a produkty/usługi zaczynają być coraz gorszej
              jakości, ale kosztują coraz więcej.
            </p>
            <div className={classes.imgWrapper}>
              <img src={zdj2} className={classes.imageContent} alt="zdj2" />
            </div>
            <p className={classes.paragraph}>
              Następny krok, mniejsze firmy są wykupywane lub upadają, ponieważ
              nie posiadają tak dużego kapitału i wsparcia jak korporacje.
              Syndykaty zagranicznych firm nie mając już konkurencji są tak
              silne, że mogą wywierać wpływ na społeczeństwo, reagować
              agresywnie na swoich konkurentów, a co najważniejsze mają kapitał,
              który bez wątpliwości przeznaczają na lobbing. Wpływy podatkowe
              zaczynają wyciekać z Polskiego rządu, rządzący zamiast reagować i
              wspierać rodzimych przedsiębiorców pompują pieniądze w różne
              inwestycje np. budowę dróg itp. zamiast skupić się w pierwszej
              kolejności na tworzeniu przyjaznego otoczenia biznesowego dla
              Polaków i polskich firm.
            </p>
            <div className={classes.imgWrapper}>
              <img src={zdj3} className={classes.imageContent} alt="zdj3" />
            </div>

            <p className={classes.paragraph}>
              Kończąc już wpis, Polacy to naród przedsiębiorczy, pracowity i
              zaradny lecz naszym problemem jest to, że nie potrafimy dojść do
              kompromisu i większość z nas myśli wyłącznie o sobie, co w
              szerszej perspektywie jest złe dla naszego kraju. Dlaczego złe
              możesz zapytać? A no dlatego, że organizmy działające symbiotyczne
              żyją dłużej i w wyższym standardzie, są w stanie lepiej reagować
              na zagrożenia oraz razem budują silniejszy system. Polacy lubią
              używać słów patriota, patriotyzm, ale wydaje się, że frazy te
              używane są bardziej jako wyidealizowana myśl niż jako nasza
              postawa. Proszę zadaj sobie pytanie droga czytelniczko/czytelniku
              kiedy ostatnio kupiłaś/kupiłeś coś od lokalnego producenta? Musimy
              zdać sobie sprawę, że dzięki stopniowej zmianie naszych zachowań
              możemy mieć globalny wpływ na nasz kraj i jego dobrobyt.
            </p>

            <div className={classes.imgWrapper}>
              <img src={zdj4} className={classes.imageContent} alt="zdj4" />
            </div>
            <p className={classes.paragraph}>
              Zachęcamy do dyskusji w komentarzach pod postem na Facebooku
            </p>
          </Typography>

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

          {/* <Typography paragraph>
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
          </Typography> */}
          {/* <Typography paragraph>
            <p className={classes.paragraph}>
              Grafiki autorstwa, Artem Podrez, Andrea Piacquadio, fauxels z
              Pexels
            </p>
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Post3;
