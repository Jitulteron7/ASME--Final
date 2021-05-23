import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// 2 rgb(6 172 141);
// 3 orange
// 4 rgb(0 182 211);
const Time=()=>{
  return(
    <div className="container_time_line">
  <VerticalTimeline className="time_line_main_box">
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#f37603', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #f37603' }}
      
      iconStyle={{ background: '#f37603', color: '#fff' }}
    // icon={}
      
    >
      <h3 className="vertical-timeline-element-title">ENGINEERING COMPETITIONS</h3>
      <p>
        A SERIES OF STIMULATING COMPETITIONS
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      
      contentStyle={{ background: 'rgb(6 172 141)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(6 172 141)' }}
      iconStyle={{ background: 'rgb(6 172 141)', color: '#fff' }}
      // icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">LIGHTNING TALKS</h3>
      
      <p>
        IMPACTFUL TALKS DELIVERED BY PIONEERS OF INDUSTRIES
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      
      contentStyle={{ background: 'orange', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  orange' }}
      iconStyle={{ background: 'orange', color: '#fff' }}
      // icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">CAREER ADVICE</h3>
      
      <p>
        GETTING MENTORED
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      
      contentStyle={{ background: 'rgb(0 182 211)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(0 182 211)' }}
      iconStyle={{ background: 'rgb(0 182 211)', color: '#fff' }}
      // icon={<Work/Icon />}
    >
      <h3 className="vertical-timeline-element-title">WORKSHOPS</h3>
    
      <p>
        BUILDING YOUR SKILL JOINING INTERACTIVE SESSIONS
      </p>
    </VerticalTimelineElement>
    
  </VerticalTimeline>
  </div>)
}

export default Time;