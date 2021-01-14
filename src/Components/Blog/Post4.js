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

import zdj1 from "../../img/blog/posts/post4/1.jpeg";
import zdj2 from "../../img/blog/posts/post4/2.jpeg";
import zdj3 from "../../img/blog/posts/post4/3.jpeg";
import zdj4 from "../../img/blog/posts/post4/4.jpeg";
import zdj5 from "../../img/blog/posts/post4/5.jpeg";
import zdj6 from "../../img/blog/posts/post4/6.jpeg";

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
    marginBottom: 10,
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
              To część wypowiedzi niemieckiego eksperta - Reinharda Petzolda,
              który od 30 lat zajmuje się wprowadzaniem niemieckich firm na
              rynek polski. Jest on także szefem Niemiecko-Polskiego Towarzystwa
              na Rzecz Współpracy Gospodarczej (DePoWi). W swojej wypowiedzi dla
              kurt.digital dodał ponadto z perspektywy naszych zachodnich
              sąsiadów, że “Niemcy bardzo mocno przyczynili się do zmian w
              Polsce, tak by były one dla nas korzystne.“ Ten cytat może jeszcze
              bardziej niż tytułowy daje do myślenia co się zadziało w Polsce od
              czasu upadku komunizmu i czy wszystkie zmiany na pewno szły w
              dobrym kierunku.
            </p>
            <Typography prargraph>
              <h4>Polska - kraj taniej siły roboczej</h4>
            </Typography>
            <p className={classes.paragraph}>
              Petzold dodaje w swojej wypowiedzi dodaje również „Zbudowaliśmy
              Polskę jako kraj taniej siły roboczej. Polsce było bardzo trudno
              pozbyć się tego wizerunku” - kontynuował. Według T.
              Bartoszewskiego z PSL odpowiadającego na słowa niemieckiego
              eksperta nasz kraj stopniowo i powoli pozbywa się wizerunku kraju
              taniej siły roboczej. Jednak jak dodaje wspomniany polityk
              “staliśmy się na jakiś czas tanią siłą roboczą”. Można jednak
              odnieść wrażenie, że jeszcze długo będziemy pozbywali się takiego
              wizerunku. A żadne odgórne zmiany regulacyjne zwiększające
              sztucznie koszty pracy w niczym nie pomogą. W tym przypadku
              potrzeba czegoś więcej.
            </p>
            <p className={classes.paragraph}>
              Jakiś czas temu na blogu pisaliśmy skrótowo o tym co się dzieje
              gdy Polacy kupują rodzime produkty, a co gdy kupują takie same
              produkty ale pochodzenia zagranicznego. Szczególnie
              zwróć uwagę na to jak wędruje kapitał w zależności od Twoich
              zakupów i co finalnie dzieje się z wydanymi pieniędzmi.
            </p>
            <div className={classes.imgWrapper}>
              <img src={zdj1} className={classes.imageContent} alt="zdj4" />
            </div>
            <Typography prargraph>
              <h4>Wyższe ceny dla biedniejszego kraju</h4>
            </Typography>
            <p className={classes.paragraph}>
              Skoro już nasz kraj jest postrzegany jako “kraj taniej siły
              roboczej” to czy to oznacza, że mamy niższe ceny w sklepach?
              Niekoniecznie. Wracając znowu do wypowiedzi Petzolda wskazuje on
              na kwestię wyższych cen tych samych produktów w Polsce w
              porównaniu do Niemiec. Według niego wynika to z faktu, że
              niemieccy dystrybutorzy zorientowali się, że istnieje wysoki popyt
              na niemieckie produkty w Polsce i w związku z tym podnieśli ich
              ceny.
            </p>
            <p className={classes.paragraph}>
              Ekspert ten dodaje że nie widzi żadnego uzasadnienia w tym aby
              taka sama czekolada (identyczny skład, masa, i producent) była w
              polskim Lidlu droższa niż w niemieckim. Dodaje też przykład cen
              produktów w jednej z sieci drogeryjnych, które również w Niemczech
              są tańsze niż na naszym krajowym rynku.{" "}
            </p>
            <div className={classes.imgWrapper}>
              <div className={classes.imgWrapper}>
                <img src={zdj2} className={classes.imageContent} alt="zdj4" />
              </div>
            </div>
            <p className={classes.paragraph}>
              A jaka jest tego przyczyna? Petzold wskazuje na wpływ reklamy i
              tego jakie zbudowała skojarzenia z niemieckimi towarami chodzi tu
              np. o skojarzenie ich z lepszą jakością. W przypadku produktów
              żywnościowych dobrze sprawdza się również reklama oddziałująca na
              nasze emocje. Taka reklama może podkreślać przyjemność płynącą z
              konsumpcji danego produktu lub ogólnie pojętą radość, która silnie
              kojarzy się nam z pozytywnymi stanami emocjonalnymi, a tym
              bardziej gdy jest okraszona odpowiednią muzyką. Warto mieć to na
              uwadze, szczególnie wtedy gdy następnym razem znowu znienacka
              wyskoczy Ci gdzieś reklama niekoniecznie jakiejś sieci sklepów.
            </p>
            <Typography prargraph>
              <h4>Niemieckie obawy o zakupy Polaków</h4>
            </Typography>
            <p className={classes.paragraph}>
              Jakiś czas temu wśród aplikacji mobilnych pojawiła się aplikacja
              Pola. Stworzona została przez klub Jagielloński aby promować i
              wspierać zakupy polskich produktów. Aplikacja ta podpowiada
              użytkownikowi na podstawie kodu kreskowego m. in. to czy dany
              produkt jest produkowany w Polsce, jaki ma udział polskiego
              kapitału, albo czy stojące za nim przedsiębiorstwo inwestuje jakoś
              w rozwój regionu, technologie.
            </p>
            <p className={classes.paragraph}>
              Ta aplikacja, nie przypadła do gustu m. in. zachodnim sąsiadom
              Polski. W niemieckiej telewizji wyemitowano program na ten temat
              (wideo w artykule na stronie Bezprawnika - sprawdź w źródłach na
              dole). Program ten kpił z założeń samej aplikacji wytykając jej
              błędy albo wskazując na jej “nieuropejskość” bo - idąc za tokiem
              rozumowania prezenterki - będąc w Europie nie można kupować tylko
              krajowych produktów, tylko trzeba kupować też zagraniczne, a
              najlepiej… no właśnie. A może cały kpiący podtekst tego materiału
              kryje za sobą obawę naszych zachodnich sąsiadów o to co i u kogo
              będziemy w przyszłości kupowali na co dzień?
            </p>
            <div className={classes.imgWrapper}>
              <img src={zdj3} className={classes.imageContent} alt="zdj4" />
            </div>
            <p className={classes.paragraph}>
              Biorąc pod uwagę wcześniejsze wypowiedzi Petzolda i reakcję w
              mediach niemieckich na aplikację Pola, być może jest jakaś część
              prawdy w określeniu, że Polska została zbudowana jako “niemiecka
              kolonia”? (tego mocnego określenia użyto w tytule artykułu na
              portalu Fronda, znajdziesz go w przypisach).
            </p>
            <Typography prargraph>
              <h4>Polskie rozwiązania</h4>
            </Typography>
            <p className={classes.paragraph}>
              Milton Friedman - wybitny ekonomista amerykański, laureat nagrody
              Nobla w dziedzinie ekonomii (1976), a także zagorzały obrońca i
              propagator wolnego rynku powiedział kiedyś:
            </p>
            <p className={classes.paragraph}>
              “Polska nie powinna naśladować bogatych krajów zachodnich, bo nie
              jest bogatym krajem zachodnim. Polska powinna naśladować
              rozwiązania, które kraje zachodnie stosowały, gdy były tak biedne,
              jak Polska.“
            </p>
            <p className={classes.paragraph}>
              Biorąc pod uwagę duży dorobek autora cytatu nie sposób nie
              pochylić się nad tą myślą. Tym bardziej, że zdaje się być ona
              ciągle aktualna. Kraje zachodniej Europy z ich wysoko rozwiniętymi
              gospodarkami z pewnością mają wiele przedsiębiorstw o silnej
              pozycji rynkowej. Polska mimo, że już jakiś czas temu zmienił się
              system gospodarczy, nadal “goni“ zachodnie państwa i ich
              gospodarki. Jednak do tego potrzeba m. in. woli realnego wsparcia
              ze strony państwa. Wsparcia w postaci np. stworzenia lepszych
              warunków do prowadzenia biznesu.
            </p>
            <div className={classes.imgWrapper}>
              <img src={zdj4} className={classes.imageContent} alt="zdj4" />
            </div>
            <p className={classes.paragraph}>
              Kiedyś słyszeliśmy, że w Polsce będzie druga Japonia, potem
              Irlandia, potem że gonimy Włochy. A jakiś czas temu w telewizji
              państwowej podali nawet, że brakuje nam tylko roku aby dogonić
              Tajwan, a 5 lat do Szwajcarii. Ciekawe swoją drogą kogo niedługo w
              opiniach rządzących będziemy doganiać…
            </p>
            <p className={classes.paragraph}>
              Niezależnie od tego, którą gospodarkę nasi włodarze będą “mieć na
              celowniku” gonitwy warto abyśmy to my także wzięli sprawy w swoje
              ręce. Nie każdy musi od razu być przedsiębiorcą. Ważne jest także
              rozsądne robienie zakupów, które również będą wspierały lokalnych
              i krajowych przedsiębiorców. Nie tylko tych dużych, ale również
              tych najmniejszych, też lokalnych producentów żywności (np.
              gospodarstwa rolne). Bo to od naszych codziennych decyzji
              zakupowych zależy to, które firmy przetrwają na rynku. W Fuddi
              możesz kupić produkty (np. owoce i warzywa) prosto od rolnika,
              często lokalnego.
            </p>
            <Typography prargraph>
              <h4>
                Patriotyzm gospodarczy - czyli to co każdy z nas może zrobić
              </h4>
            </Typography>
            <p className={classes.paragraph}>
              Każdy niezależnie od tego jak częste i jak duże robi zakupy może
              wybierać świadomie produkty patrząc oprócz ceny także na ich
              skład, jakość, a także kraj pochodzenia. Chodzi przede wszystkim o
              to aby konsumenci zdali sobie sprawę, że kupując od rodzimych
              przedsiębiorstw przy okazji wspierają m. in. rozwój nowych miejsc
              pracy w Polsce, nowe inwestycje.
            </p>
            <div className={classes.imgWrapper}>
              <img src={zdj5} className={classes.imageContent} alt="zdj4" />
            </div>
            <p className={classes.paragraph}>
              Jest to głównie kwestia edukacji. Nie chodzi tutaj o kupowanie
              polskich produktów jedynie dlatego, że są polskie, ale o to aby
              mając do wyboru dwa jednakowo dobre jakościowo produkty wybrać ten
              produkcji rodzimej. Niektórzy zamiast określenia patriotyzm
              gospodarczy mówią tu o “realizmie gospodarczym” (artykuł
              Rzeczypospolitej podany na dole). Jeśli uzmysłowić sobie
              długoterminowe skutki naszych wyborów konsumenckich to jest w tym
              coś na rzeczy.
            </p>
            <p className={classes.paragraph}>
              Dzięki odpowiednim codziennym wyborom możemy realnie przyczynić
              się do poprawy sytuacji gospodarczej w kraju. A tym samym w długim
              okresie wpłynąć na zmianę wizerunku Polski jako jedynie “kraju
              taniej siły roboczej”. Wiadomo potrzebne są też i odpowiednie
              regulacje, nie tylko te sztucznie pompujące koszty pracy, ale
              nasza rola jako konsumentów jest również olbrzymia. Kupując towary
              produkowane w Polsce budujemy siłę polskich przedsiębiorstw, nie
              tylko tych ogólnokrajowych, ale także i mniejszych, często tylko
              lokalnie funkcjonujących. Jak na przykład lokalni producenci
              żywności.
            </p>
            <div className={classes.imgWrapper}>
              <img src={zdj6} className={classes.imageContent} alt="zdj4" />
            </div>
            <p className={classes.paragraph}>
              W Fuddi dajemy Ci możliwość zamawiania produktów żywnościowych
              także bezpośrednio od lokalnych rolników. Dzięki czemu możesz się
              cieszyć nie tylko zdrowymi i świeżymi produktami (np. owoce i
              warzywa) ale również wspomagać rozwój regionu. Wspierasz przy tym
              również lokalne gospodarstwa rolne - też te najmniejsze, czasami
              tradycyjnie gospodarowane i nie nastawione na masową produkcję.
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

          <Typography paragraph>
            <h4>Źródła:</h4>
          </Typography>
          <Typography paragraph>
            <ul>
              <li>
                <a
                  href="https://www.pap.pl/aktualnosci/news%2C784228%2Cniemiecki-ekspert-zbudowalismy-polske-jako-kraj-taniej-sily-roboczej.html"
                  target="_blank"
                >
                  https://www.pap.pl/aktualnosci/news%2C784228%2Cniemiecki-ekspert-zbudowalismy-polske-jako-kraj-taniej-sily-roboczej.html
                </a>
              </li>
              <li>
                <a
                  href="https://wgospodarce.pl/informacje/90133-niemiec-o-polsce-kraj-taniej-sily-roboczej"
                  target="_blank"
                >
                  https://wgospodarce.pl/informacje/90133-niemiec-o-polsce-kraj-taniej-sily-roboczej{" "}
                </a>
              </li>
              <li>
                <a href="https://bezprawnik.pl/aplikacja-pola/" target="_blank">
                  https://bezprawnik.pl/aplikacja-pola/
                </a>
              </li>
              <li>
                <a
                  href="https://www.rp.pl/Debaty-ekonomiczne/309309974-Robiac-zakupy-mamy-realny-wplyw-na-firmy-i-gospodarke.html"
                  target="_blank"
                >
                  https://www.rp.pl/Debaty-ekonomiczne/309309974-Robiac-zakupy-mamy-realny-wplyw-na-firmy-i-gospodarke.html
                </a>
              </li>
              <li>
                <a
                  href="https://wgospodarce.pl/opinie/20008-klasycy-ekonomii-10-cytatow-miltona-friedmana-wyjasniajacych-wszystko-o-gospodarce"
                  target="_blank"
                >
                  https://wgospodarce.pl/opinie/20008-klasycy-ekonomii-10-cytatow-miltona-friedmana-wyjasniajacych-wszystko-o-gospodarce
                </a>
              </li>
              <li>
                <a
                  href="https://www.fronda.pl/a/niemiecki-ekspert-zbudowalismy-polske-jako-niemiecka-kolonie-zgodnie-z-naszym-interesem,155010.html"
                  target="_blank"
                >
                  https://www.fronda.pl/a/niemiecki-ekspert-zbudowalismy-polske-jako-niemiecka-kolonie-zgodnie-z-naszym-interesem,155010.html
                </a>
              </li>
              <li>
                <a
                  href="https://www.bankier.pl/wiadomosc/Polska-w-gospodarczej-pogoni-za-Wlochami-7615437.html"
                  target="_blank"
                >
                  https://www.bankier.pl/wiadomosc/Polska-w-gospodarczej-pogoni-za-Wlochami-7615437.html
                </a>
              </li>
              <li>
                <a
                  href="https://innpoland.pl/154165,za-rok-dogonimy-tajwan-za-5-szwajcarie-twierdzi-tvp-jak-to-wyliczyli"
                  target="_blank"
                >
                  https://innpoland.pl/154165,za-rok-dogonimy-tajwan-za-5-szwajcarie-twierdzi-tvp-jak-to-wyliczyli
                </a>
              </li>
              <li>
                <a
                  href="https://www.pap.pl/aktualnosci/news%2C784987%2Cbartoszewski-polska-byla-jakis-czas-krajem-taniej-sily-roboczej-ale-z-tego"
                  target="_blank"
                >
                  https://www.pap.pl/aktualnosci/news%2C784987%2Cbartoszewski-polska-byla-jakis-czas-krajem-taniej-sily-roboczej-ale-z-tego
                </a>
              </li>
              <li>
                <a
                  href="https://dietly.pl/blog/wplyw-reklamy-na-wybory-zywieniowe"
                  target="_blank"
                >
                  https://dietly.pl/blog/wplyw-reklamy-na-wybory-zywieniowe
                </a>
              </li>
            </ul>
          </Typography>
          <Typography paragraph>
            <p className={classes.paragraph}>
              Grafiki z: pexels.com, kaboompics.com
            </p>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Post3;
