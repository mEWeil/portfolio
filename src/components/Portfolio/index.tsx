import Loader from 'react-loaders';
import './index.scss';

export default function Portfolio() {
  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <ul>
            <li className="portfolio-li">
              <h1>Software Dev Blog</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                labore? Aliquid distinctio nemo deserunt ipsa minus tempore
                iusto, voluptates quibusdam, error quisquam eveniet rem
                accusantium tempora facere consequuntur deleniti eligendi?
              </p>
              <a
                target="_blank"
                href="https://github.com/mEWeil/Software-Dev-Blog"
                rel="noreferrer"
              >
                Github Repo
              </a>
              <br />
              <a href="null">Live Project</a>
            </li>
            <li className="portfolio-li">
              <h1>To-Do Application</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                labore? Aliquid distinctio nemo deserunt ipsa minus tempore
                iusto, voluptates quibusdam, error quisquam eveniet rem
                accusantium tempora facere consequuntur deleniti eligendi?
              </p>
              <a
                target="_blank"
                href="https://github.com/mEWeil/To-Do-Application"
                rel="noreferrer"
              >
                Github Repo
              </a>
              <br />
              <a href="null">Live Project</a>
            </li>
            <li className="portfolio-li">
              <h1>E-Commerce Website</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                labore? Aliquid distinctio nemo deserunt ipsa minus tempore
                iusto, voluptates quibusdam, error quisquam eveniet rem
                accusantium tempora facere consequuntur deleniti eligendi?
              </p>
              <a href="null">Github Repo</a>
              <br />
              <a href="null">Live Project</a>
            </li>
            <li className="portfolio-li">
              <h1>Software Dev Blog</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                labore? Aliquid distinctio nemo deserunt ipsa minus tempore
                iusto, voluptates quibusdam, error quisquam eveniet rem
                accusantium tempora facere consequuntur deleniti eligendi?
              </p>
              <a
                target="_blank"
                href="https://github.com/mEWeil/Software-Dev-Blog"
                rel="noreferrer"
              >
                Github Repo
              </a>
              <br />
              <a href="null">Live Project</a>
            </li>
            <li className="portfolio-li">
              <h1>Software Dev Blog</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                labore? Aliquid distinctio nemo deserunt ipsa minus tempore
                iusto, voluptates quibusdam, error quisquam eveniet rem
                accusantium tempora facere consequuntur deleniti eligendi?
              </p>
              <a
                target="_blank"
                href="https://github.com/mEWeil/Software-Dev-Blog"
                rel="noreferrer"
              >
                Github Repo
              </a>
              <br />
              <a href="null">Live Project</a>
            </li>
          </ul>
        </div>
      </div>
      <Loader type="line-scale" active />
    </>
  );
}
