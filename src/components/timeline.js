import React from "react";
import MuiTimeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import './timeline.css'

function MyTimeline() {
  return (

    <div className="timeline-custom">
             <MuiTimeline position="alternate-reverse">
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent><b>Discovery & Business Analysis</b></TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent><b>User Experience</b></TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot color="success" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent><b>User Interface Design</b></TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot color="warning" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent><b>Development</b></TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot color="info" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent><b>Launch & Optimization</b></TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot color="error" />
                    </TimelineSeparator>
                    <TimelineContent><b>Testing & Final Delivery</b></TimelineContent>
                </TimelineItem>
                </MuiTimeline>
    </div>
  

  );
}

export default MyTimeline;
