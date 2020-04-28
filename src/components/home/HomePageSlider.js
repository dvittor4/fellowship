import React from 'react';
import Slider from 'react-slick';
import $ from 'jquery';
import HomePageSlide from './HomePageSlide'
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./HomePageSlider.css"


class HomePageSlider extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      padding: this.getPadding(),
      slides: [{
          "imageUrl":"/img/about_us_fbc.jpeg",
          "backgroundPosition":"center",
          "internalLink":true,
        },{
          "imageUrl":"http://fellowship.org.au/site/user/images/Screen_Shot_2011_08_27_at_8_30_58_AM.png",
          "backgroundPosition":"center",
          "internalLink":false,
        },{
          "subtitle":"Kwok Family",
          "imageUrl":"http://fellowship.org.au/site/user/images/Kwok_Family.jpeg",
          "backgroundPosition":"center",
          "internalLink":false,
        },{
          "subtitle":"Eggert Family",
          "imageUrl":"http://fellowship.org.au/site/user/images/Eggert_famliy_pic_2017_Dec.jpg",
          "backgroundPosition":"center",
          "internalLink":false,
        },{
          "subtitle":"Weber Family",
          "imageUrl":"http://fellowship.org.au/site/user/images/Weber_Family_Photos___2019.JPG",
          "backgroundPosition":"center",
          "internalLink":false,
        },{
          "type":"GOSPEL SERIES",
          "title":"Revelations",
          "subtitle": "Revelation of Jesus Christ",
          "imageUrl":"img/slides/family.jpg",
          "backgroundPosition":"center",
          "internalLink":true,
          "url":"/sermons/series/Revelations"
        },{
          "type":"GOSPEL SERIES",
          "title":"Psalms 119",
          "subtitle": "Studies on Psalms 119",
          "imageUrl":"img/slides/romance.jpg",
          "internalLink":true,
          "url":"/sermons/series/Psalms%20119"
        },{
          "type":"GOSPEL SERIES",
          "title":"Exodus",
          "subtitle":"Studies in Exodus",
          "imageUrl":"img/slides/riches.jpg",
          "internalLink":true,
          "url":"/sermons/series/Exodus",
        }
      ]
    }
  }

  getPadding = () => {
    if($(window).width() > 700) {
      return ($(window).width() - 700) / 2
    } else {
      return 0;
    }
  }

  updateDimensions = () => {
    this.setState({
      padding: this.getPadding()
    })
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render(){
    var settings = {
      centerMode: true,
      centerPadding: this.state.padding+'px',
      slidesToShow: 1,
      autoplay:true,
      arrows:false,
      autoplaySpeed:5000,
      dots:true
    };

    const slides = this.state.slides.map((slide,index)=>{
      return(
        <div key={index}>
          <HomePageSlide {...slide}/>
        </div>
      )
    })

    return (
      <Slider {...settings}>
        {slides}
      </Slider>
    );
  }
}

export default HomePageSlider;
