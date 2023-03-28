import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()

    return (
        <div style={{marginLeft: "20px", marginTop: "40px", marginBottom: "100px"}}>
            <div>
                Hey, my name is Alex Osmonov. Most people just call me oz. I&apos;m a software engineer based out of
                NYC.

                <br/>
                <br/>
                <span>
                  <b>I&apos;m currently helping several companies ship new micro-services, so if you need help architecting/coding your mvp, please email me at: aleosm@berkeley.edu </b>
              </span>
            </div>
            <br/>
            <div>
                <Image src={'/money-shot.jpg'} alt="Picture of Me" width={180} height={240}/>
            </div>
            <div style={{paddingTop: "10px"}}>
                <span style={{paddingRight: "5px"}}>
                    <button type="button" onClick={() => {
                        window.open(
                            "https://github.com/os-monov",
                            "_blank"
                        )
                    }}>GitHub</button>
                </span>
                <span style={{paddingLeft: "5px", paddingRight: "5px"}} >
                    <button type="button" onClick={() => {
                        window.open(
                            "https://www.linkedin.com/in/thealexanderosmonov/",
                            "_blank"
                        )
                    }}>LinkedIn</button>
                </span>
                <span style={{paddingLeft: "5px", paddingRight: "5px"}}>
                    <button type="button" onClick={() => {
                        window.open(
                        "https://mobile.twitter.com/os_monov",
                        "_blank"
                        )}}
                    >Twitter</button>
                </span>

                <span style={{paddingLeft: "5px"}}>
                    <button type="button" onClick={() => router.push('/essays')}>
                        Essays
                    </button>
              </span>
            </div>
            <div>
                <h4><u>Education</u></h4>
                <h5> uc berkeley </h5>
                <span>
                  - studied data science & economics <br/>
                  - started taking cs classes sophomore year & i wish i had taken less economics classes lol
              </span>
                <br/>
                <h5><a href={"https://www.bergen.org/bergencountyacademies"}>bergen county academies</a></h5>
                <span>
                  - a magnet high school in nj; focused on mechanical engineering <br/>
                  - met a lot of my closest friends to this day at bca
              </span>
                <h4><u>Jobs</u></h4>

                <h5><a href={"https://www.paces.com/"}>Paces</a> (YC S22) - Founding Engineer / Contractor </h5>
                <span>
                  - after a couple of months, i switched to a contracting role to spend more time working on my own ideas <br/>
                  - as a contractor, i primarily focus on infrastructure, occasional product features, & bugs <br/>
              </span>

                <h5>AWS - Software Development Engineer </h5>
                <span>
                  - one of two engineers to design, implement, & launch <a
                    href={"https://upload.aws.amazon.com/"}>SecureUpload</a>, a tool responsible for collecting
                  150K+ highly-sensitive documents (e.g. driver&apos;s license, credit card statement) from 2-3M AWS customers annually <br/>
                  - vended & supported REST API for internal teams to query documents & communicate with customers; maintained 99.999+% availability during my tenure <br/>
                  - stack: fargate, dynamodb, s3, docker, java, react, & aws cdk <br/>
                  - promoted to sde 2 in ~15 months
              </span>

                <h5><a href={"https://www.rokt.com/"}>Rokt</a> - Data Science Intern</h5>
                <span>
                  - spent most of the summer on an exploratory time spend analysis to examine the key inefficiencies across regions and seniority for account managers and operations staff <br/>
                  - findings were presented at the EOQ executive committee meeting
              </span>

                <h4>Projects: </h4>
                <h5> DocuLink </h5>
                <span>
                  - a SaaS/API solution for securely requesting documents at scale: think DocuSign meets DropBox <br/>
                  - yc competitors: <a href={"https://www.ycombinator.com/companies/pigeon"}>pigeon</a> & <a
                    href={"https://www.ycombinator.com/companies/uplink"}>uplink</a> <br/>
                  - built mvp as sole engineer in ~2 months; <a
                    href={"https://github.com/os-monov/doculink-service"}>code</a> <br/>
                  - quit my job at AWS to work on this full-time; interviewed for YCS22 <br/>
              </span>
                <h5><a href={"https://www.samurai.dev/"}>Samurai</a></h5>
                <span>
                  - first product, Instance Scheduler, is a fully-managed, multi-tenant solution of the <a
                    href={"https://aws.amazon.com/solutions/implementations/instance-scheduler-on-aws/"}> AWS Instance Scheduler</a><br/>
                  - shifted away from the cloud cost optimization space after partnering with my co-founder, Brian
              </span>

            </div>
        </div>
    )
}