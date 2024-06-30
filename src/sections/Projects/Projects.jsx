import styles from "./ProjectsStyles.module.css";
import sundown from "../../assets/sundown.jpg";
import truemail from "../../assets/truemail.jpg";
import secure from "../../assets/secure.jpg";
import news from "../../assets/news.jpg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={sundown}
          link="https://sundown-studio-landing-page-ui-clone.vercel.app/"
          h3="Sundown Studio"
          p="Landing Page UI Clone"
        />
        <ProjectCard
          src={truemail}
          link="https://true-mail.vercel.app/"
          h3="True Mail"
          p="Email Validator"
        />
        <ProjectCard
          src={secure}
          link="https://secure-generator.vercel.app/"
          h3="SecureGen"
          p="Password Generator "
        />
        <ProjectCard
          src={news}
          link="https://github.com/the-ajay-panigrahi/SamacharTimes"
          h3="Samachar Times"
          p="News Web App"
        />
      </div>
    </section>
  );
}

export default Projects;
