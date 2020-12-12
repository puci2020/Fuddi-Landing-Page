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
import MDEditor from "@uiw/react-md-editor";
import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import phones from "../../img/blog/posts/post1/phones.jpeg";
import water from "../../img/blog/posts/post1/water.jpeg";
import reduce from "../../img/blog/posts/post1/reduce.jpeg";
import vegetables from "../../img/blog/posts/post1/vegetables.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 20,
    maxWidth: 1000,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
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

const Post = ({ id, data }) => {
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
        title={<span className={classes.title}>{data.title}</span>}
        subheader={<span className={classes.subheader}>{data.date}</span>}
      />

      <CardMedia
        className={classes.media}
        image={data.imageURL}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.shortDesc}
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
              <MDEditor.Markdown source={data.content} />
            </p>
          </Typography>
          {/* <Typography paragraph>
            <h4>Black Friday - nowe święto</h4>
          </Typography>
          <Typography paragraph>
            <p className={classes.paragraph}>
              Jakiś czas temu w sieci pojawiło się wideo na kanale Russel Brand
              dotyczące Czarnego piątku w czasach pandemii. Daje do myślenia.
              Podczas gdy w telewizji, z ust polityków słyszymy ciągłe
              nawoływania do tego aby przestrzegać obostrzeń dla naszego
              wspólnego dobra, zostawać w miarę możliwości w domach itp. To z
              drugiej strony mieliśmy całkiem niedawno obchodzone “święto
              konsumpcjonizmu” – Black Friday.
            </p>
            <p className={classes.paragraph}>
              Dla wielu kupujących tłumnie przybywających na to „święto” z
              pewnością wszelkie kwestie związane z wirusem chwilowo odeszły w
              zapomnienie. A umysł przekształcił się w tryb łowcy – widzącego
              przede wszystkim czerwone lub pomarańczowe tabliczki z napisem
              „przecena”, „rabat”. Co bardziej wytrawni z łatwością dostrzegali
              przy okazji przekreślone kwoty rozpalające do granic czerwoności
              wyobraźnię, i wiarę w to, że mogą wiele zaoszczędzić kupując
              jeszcze więcej produktów. Ale czy zawsze aż tak bardzo
              potrzebnych?
            </p>
          </Typography>
          <Typography paragraph>
            <h4>Kult zakupu nowych rzeczy</h4>
          </Typography>
          <Typography paragraph>
            <p className={classes.paragraph}>
              Czy wiesz, że w tzw. sektorze fashion praktycznie co tydzień
              następuje zmiana asortymentu ubrań w sieciówkach? Jak myślisz czy
              to dlatego, że przez tydzień zawsze wszystko w całości się
              sprzeda? Małe szanse. Taka częsta zmiana asortymentu powoduje
              olbrzymie marnowanie zasobów, a także degradację środowiska - bo w
              końcu co chwila musi być opracowana i wyprodukowana nowa seria
              ubrań dla konsumenta spragnionego nowości.
            </p>
            <div className={classes.imgWrapper}>
              <img src={phones} className={classes.imageContent} alt="phones" />
            </div>
            <p className={classes.paragraph}>
              Inny przykład - smartfony. Obecnie model dystrybucji elektroniki
              użytkowej kładzie nacisk na kupowanie coraz częściej pojawiających
              się nowych modeli. To w pewnym sensie taki ciągły pęd posiadania
              nowszych urządzeń. Z pewnością są takie osoby, może nawet je
              znasz, które szybko np. po roku lub wcześniej zmieniają telefon bo
              “ten im się znudził”. Absurd.
            </p>
            <p className={classes.paragraph}>
              Wyprodukowanie jednego smartfona kosztuje naszą planetę bardzo
              dużo. Nie wspominając już o konieczności wydobycia nowych surowców
              (np. kobalt, tantal, lit i innych metali ziem rzadkich). Produkcja
              jednego smartfona kosztuje około 13 ton wody! Następnym razem gdy
              pomyślisz o zmianie telefonu to zastanów czy tak naprawdę tego
              potrzebujesz i czy jest to warte m. in. zużycia tych kilkunastu
              ton wody...
            </p>
          </Typography>

          <Typography paragraph>
            <h4>Black Friday skąd się wzięło pojęcie</h4>
          </Typography>
          <Typography paragraph>
            <p className={classes.paragraph}>
              Pierwsze wzmianki o powstaniu “gorączki przedświątecznych zakupów”
              pojawiły się w USA w XIX wieku, miały miejsce zaraz po czwartkowym
              Święcie Dziękczynienia. Sama nazwa Czarnego Piątku pojawiła się na
              dobre w latach 50-tych XX wieku w USA. Wynikała z tego, że wiele
              osób po wspomnianym czwartkowym święcie nie pojawiało się w piątek
              w pracy. Zamiast tego szli między innymi na zakupy.
            </p>
            <p className={classes.paragraph}>
              Można sobie zadać pytanie czy Black Friday na dobre wkroczył do
              Polski? Za odpowiedź niech posłużą statystyki. Średnio podczas
              zakupów w ten dzień w kasach zostawiamy 340 złotych, a łączne
              wydatki w skali kraju przekraczają 2,3 miliarda złotych (dane na
              podstawie artykułu z 2019 roku).
            </p>
          </Typography>
          <Typography paragraph>
            <h4>Antykonsumpcjonizm – czy ktoś w to jeszcze wierzy?</h4>
          </Typography>
          <Typography paragraph>
            <p className={classes.paragraph}>
              Nasz świat jest oparty na modelu ciągłego wzrostu gospodarczego.
              Korporacje, spółki w każdej chwili mają na uwadze rozwój, dzięki
              któremu nie tylko osiągną zyski ale i poprawią wyniki widniejące w
              sprawozdaniach, bo przecież tego oczekują akcjonariusze. Ale ten
              model nie może trwać wiecznie. Mamy tylko jedną planetę - z
              ograniczonymi jej zasobami, nie tylko surowców, ale i np. wody.
              Coraz więcej produkujemy, coraz więcej sprzedajemy, coraz więcej
              zużywamy i coraz szybciej wyrzucamy. Jednak prędzej czy później
              będziemy musieli wykorzystywać to co już jest, póki co mówi się o
              idei zero waste, w przyszłości może to się nazywać nie ideą, ale
              koniecznością.
            </p>
            <div className={classes.imgWrapper}>
            <img src={water} className={classes.imageContent} alt="water" />
            </div>
            <p className={classes.paragraph}>
              W antykonsumpcjonizm wpisuje tzw. ekonomia współdzielenia, o
              której więcej możesz doczytać w jednym z naszych poprzednich
              wpisów, a także wspomniana przed chwilą idea zero waste. Bardzo
              ciekawym zastosowaniem w praktyce wspomnianych zasad jest
              działająca w Poznaniu Po-Dzielnia. Ideą jej działania jest
              wydłużenie życia produktów, ograniczenie konsumpcjonizmu, promocja
              upcyclingu, a także umiejętności naprawiania przedmiotów. Można
              tam przynieść pojedyncze przedmioty, których nie używamy, a są w
              dobrym stanie i zabrać zupełnie za darmo rzeczy, które nam się
              przydadzą.
            </p>
            <p className={classes.paragraph}>
              Coraz więcej osób widzi problem nadmiernej konsumpcji i jej
              negatywny wpływ m. in. na środowisko. Przejawem tego była także
              niedawna akcja aktywistów z Extinction Rebellion we Wrocławiu w
              ramach “Nagiego Protestu w Czarny Piątek”, podczas której
              uczestnicy weszli na witryny jednego ze sklepów w okolicach rynku,
              mając na sobie przywieszone kartki z różnymi hasłami
              sprzeciwiającymi się nadmiernemu konsumpcjonizmowi.
            </p>
          </Typography>
          <Typography paragraph>
            <h4>Rozsądek podczas zakupów i trend Zero Waste przez duże R</h4>
          </Typography>
          <Typography paragraph>
            <p className={classes.paragraph}>
              Wracając znowu do wspomnianego na początku wideo nasuwa się
              pytanie czy warto biegać od promocji do promocji i tłumnie kupować
              tak dużo rzeczy? Czy to ma sens? A co z pandemią, wirusem,
              obostrzeniami? Można uznać, że w takie „święto” konsumpcjonizmu
              zeszły na drugi lub nawet dalszy plan...
            </p>

            <p className={classes.paragraph}>
              Promocje cenowe same w sobie nie są złe. Kiedyś kojarzyły się
              głównie ze sprzedażą rzeczy, które „nie szły”, a teraz można
              odnieść wrażenie, że stało się to potężne narzędzie marketingowe
              generujące nowy popyt. Jeśli faktycznie człowiek potrzebuje
              jakiejś nowej rzeczy to kupienie jej nie jest niczym złym, a
              promocja sama w sobie może przynieść jakąś oszczędność. Gorzej
              jeśli faktycznie czegoś nie potrzebujemy ale przez te rzucające
              się w oczy hasła promocyjne coś jednak kupimy. Coś co potem
              rzucamy w kąt i żałujemy, że to kupiliśmy.
            </p>
            <div className={classes.imgWrapper}>
            <img src={reduce} className={classes.imageContent} alt="reduce" />
            </div>
            <p className={classes.paragraph}>
              Potrzebna jest autorefleksja. A przede wszystkim, wcześniej przed
              samym zakupem. Zero waste określa się m. in. jako zasadę 5R czyli
              refuse - odmawiaj, reduce - ograniczaj, reuse - wykorzystaj
              ponownie, recycle - recyklinguj i rot - kompostuj. Refuse nie na
              darmo jest umieszczone na początku. Przed zakupem warto się
              zastanowić czy dana rzecz jest nam naprawdę potrzebna i czy to nie
              jest chwilowa, zachcianka wytworzona pod wpływem impulsu.
            </p>
          </Typography>
          <Typography paragraph>
            <h4>Rób lokalnie zakupy - wspieraj swoje otoczenie</h4>
          </Typography>
          <Typography paragraph>
            <p className={classes.paragraph}>
              Skoro faktycznie musimy kupować nowe rzeczy to czy nie warto
              byłoby przy okazji zakupów zrobić coś dobrego dla swojego
              otoczenia lub regionu?
            </p>

            <p className={classes.paragraph}>
              Lokalność – wpisująca się w ideę zero waste – polega na kupowaniu
              produktów, które są dostępne na miejscu. Celem tego jest
              ograniczenie ilości przesyłek zwiększających ślad węglowy (większe
              zużycie paliwa, konieczność wynajęcia firm transportowych, itp.).
              Kolejnym ważnym argumentem przemawiającym za kupowaniem lokalnie
              jest to, że po prostu wtedy zamiast wspierać duże korporacje
              wspierasz swoje najbliższe otoczenie. Wtedy dla przykładu dzięki
              Twoim zakupom wesprzesz lokalnego rolnika produkującego warzywa i
              owoce i będzie mógł on dalej utrzymywać się z pracy w swoim
              gospodarstwie rolnym.
            </p>
            <div className={classes.imgWrapper}>
            <img
              src={vegetables}
              className={classes.imageContent}
              alt="vegetables"
            />
            </div>
            <p className={classes.paragraph}>
              Być może zadajesz sobie pytanie jak to zrobić – kupować rozsądnie
              i wspierać swoje otoczenie, swój region? To proste. Już niedługo
              za pomocą naszej wspólnej platformy Fuddi, będziesz mógł/a z
              łatwością zamówić świeże, zdrowe produkty wytwarzane lokalnie u
              rolników (np. owoce, warzywa i inne produkty rolne i
              rzemieślnicze), a tym samym przyczynić się do tego, że w
              przyszłości nadal będzie istniało to mniejsze, lokalne
              gospodarstwo rolne - bo będzie miało komu produkować ekologiczną
              żywność.
            </p>
          </Typography>
          <Typography paragraph>
            <p>Zapraszamy do dyskusji na naszych social mediach:</p>
              <a href="https://www.facebook.com/Fuddi-107367687746824" target="_blank">
                  <FacebookIcon/>
              </a>
              <a href="https://www.linkedin.com/company/fuddiplace/" target="_blank">
                  <LinkedInIcon/>
              </a>
          </Typography>
          <Typography paragraph>
            <h4>Źródła:</h4>
          </Typography>
          <Typography paragraph>
            <ul>
              <li>
                Wspomnianie wideo z yt -
                <a
                  href="https://www.youtube.com/watch?v=dPppAAf3enY"
                  target="_blank"
                >
                  https://www.youtube.com/watch?v=dPppAAf3enY
                </a>
              </li>
              <li>
                <a
                  href="https://www.green-projects.pl/black-friday-czarny-dzien-dla-srodowiska/"
                  target="_blank"
                >
                  https://www.green-projects.pl/black-friday-czarny-dzien-dla-srodowiska/{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.rp.pl/Styl-zycia/190929793-Black-Friday-w-liczbach-Ile-wydajemy-a-ile-oszczedzamy-podczas-Czarnego-Piatku.html
"
                  target="_blank"
                >
                  https://www.rp.pl/Styl-zycia/190929793-Black-Friday-w-liczbach-Ile-wydajemy-a-ile-oszczedzamy-podczas-Czarnego-Piatku.html
                </a>
              </li>
              <li>
                <a
                  href="https://wiadomosci.onet.pl/tylko-w-onecie/zero-waste-rozmowa-z-dr-michalem-chilinskim-niechzyjeplaneta/fbf3g09"
                  target="_blank"
                >
                  https://wiadomosci.onet.pl/tylko-w-onecie/zero-waste-rozmowa-z-dr-michalem-chilinskim-niechzyjeplaneta/fbf3g09
                </a>
              </li>
              <li>
                <a
                  href="https://pl-pl.facebook.com/notes/309411432921723/"
                  target="_blank"
                >
                  https://pl-pl.facebook.com/notes/309411432921723/
                </a>
              </li>
              <li>
                <a
                  href="https://www.eska.pl/wroclaw/galeria/nagi-protest-we-wroclawiu-stop-konsumpcjonizmowi-powiedzieli-aktywisci-z-extinction-rebellion-wroclaw/gg-ArMx-sNJY-rwSq/gp-kgQ7-Zkbx-b2SB
                  "
                  target="_blank"
                >
                  https://www.eska.pl/wroclaw/galeria/nagi-protest-we-wroclawiu-stop-konsumpcjonizmowi-powiedzieli-aktywisci-z-extinction-rebellion-wroclaw/gg-ArMx-sNJY-rwSq/gp-kgQ7-Zkbx-b2SB
                </a>
              </li>
            </ul>
          </Typography>
          <Typography paragraph>
            <h4>Prawa autorskie</h4>
          </Typography>
          <Typography paragraph>
            Zdjęcie autorstwa Max Fischer, Gabriel Freytez, Rifqi Ramadhan,
            picjumbo.com, Vlada Karpovich z Pexels
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Post;
