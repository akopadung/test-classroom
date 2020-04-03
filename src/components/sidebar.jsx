import React, { Component } from 'react'
import profile__image from './images/about.jpg'
import SideItems from "./SideItems"
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";

function onClick(e, item) {
  //window.alert(JSON.stringify(item, null, 2));
  //console.log(item);
}
 
const items = [ 
  { name: "home", label: "หน้าแรก", Icon: HomeIcon, onClick},
  {
    name: "activity",
    label: "แฟ้มสะสมผลงาน",
    Icon: ReceiptIcon,
    items: [
      { name: "order", label: "คำสั่งปฏิบัติงาน", onClick },
      { name: "award", label: "ผลงานและเกียรติบัตร", onClick },
      { name: "timeline", label: "กิจกรรมที่เข้าร่วม", onClick },
      { name: "plc", label: "ชุมชนการเรียนรู้ (PLC)", onClick }
    ]
  },
  {
    name: "lms",
    label: "การจัดการเรียนรู้",
    Icon: ReceiptIcon,
    items: [
      { name: "11", label: "1.1 การสร้างและหรือพัฒนาหลักสูตร", onClick },
      { name: "12", label: "1.2 การออกแบบหน่วยการเรียนรู้", onClick },
      { name: "13", label: "1.3 การสร้างและการพัฒนาสื่อฯ", onClick },
      { name: "14", label: "1.4 การวัดและประเมินผลการเรียนรู้", onClick },
      { name: "15", label: "1.5 การวิจัยเพื่อพัฒนาการเรียนรู้", onClick }
    ]
  },{
    name: "cms",
    label: "การบริหารจัดการชั้นเรียน",
    Icon: ReceiptIcon,
    items: [
      { name: "21", label: "2.1 การบริหารจัดการชั้นเรียน", onClick },
      { name: "22", label: "2.2 การจัดระบบดูแลช่วยเหลือผู้เรียน", onClick },
      { name: "23", label: "2.3 การจัดทำข้อมูลสารสนเทศ", onClick }
    ]
  },
  {
    name: "development",
    label: "การอบรมและพัฒนา",
    Icon: ReceiptIcon,
    items: [
      { name: "self", label: "การพัฒนาตนเอง", onClick },
      { name: "career", label: "การพัฒนาวิชาชีพ", onClick }
    ]
  }/*,
  "divider",
  {
    name: "settings",
    label: "Settings",
    Icon: SettingsIcon,
    items: [
      { name: "profile", label: "Profile" },
      { name: "insurance", label: "Insurance", onClick },
      "divider",
      {
        name: "notifications",
        label: "Notifications",
        Icon: NotificationsIcon,
        items: [
          { name: "email", label: "Email", onClick },
          {
            name: "desktop",
            label: "Desktop",
            Icon: DesktopWindowsIcon,
            items: [
              { name: "schedule", label: "Schedule" },
              { name: "frequency", label: "Frequency" }
            ]
          },
          { name: "sms", label: "SMS" }
        ]
      }
    ]
  }*/
];

export default class Sidebar extends Component {

  
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: `url(${profile__image})`}}/>
              <h3 id="colorlib-logo" style={{marginTop:'-20px'}} ><a hhref="#home" data-nav-section="home">นายอนุรักษ์ โคผดุง</a></h3>
              <h3 id="colorlib-logo-15" style={{marginTop:'-5px'}} >Anurak Khophadung</h3>
              <h3 id="colorlib-logo-10" style={{fontSize:8}}>กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี โรงเรียนภูเขียว</h3>
              <span className="email"><i className="icon-mail"></i> anurak.k@phukhieo.ac.th</span>
            </div>
            <SideItems items={items} ></SideItems>
            <div className="colorlib-footer" style={{position: 'relative',
  bottom: 0,
  width: '100%',
  height: '2.5rem',
  marginTop:'10px' }}>
            <nav id="colorlib-main-menu" >
              <ul>
                <li><a href="#home" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a>
                <a href="#home" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a>
                <a href="#home" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a>
                <a href="#home" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a>
                <a href="#home" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a>
                <a href="#home" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
              </ul>
            </nav>
              <p style={{marginTop:"-10px"}}><small style={{fontSize: '10px'}}>
                  Thanks <a href="https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/" target="_blank" rel="noopener noreferrer">Dhruv </a>
                  and <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
              </small></p>
            </div>
            
          </aside>
        </div>
      </div>
    )
  }
}
