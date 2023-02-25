import Loader from 'react-loaders';
import './index.scss';

export default function Portfolio() {
  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <ul>
            <li className="">
              <h1>Sample Project 1</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                labore? Aliquid distinctio nemo deserunt ipsa minus tempore
                iusto, voluptates quibusdam, error quisquam eveniet rem
                accusantium tempora facere consequuntur deleniti eligendi?
              </p>
              <a href="null">github</a>
              <a href="null">website</a>
            </li>
            <li className="">
              <h1>Sample Project 2</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                labore? Aliquid distinctio nemo deserunt ipsa minus tempore
                iusto, voluptates quibusdam, error quisquam eveniet rem
                accusantium tempora facere consequuntur deleniti eligendi?
              </p>
            </li>
            <li className="">
              <h1>Sample Project 3</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                labore? Aliquid distinctio nemo deserunt ipsa minus tempore
                iusto, voluptates quibusdam, error quisquam eveniet rem
                accusantium tempora facere consequuntur deleniti eligendi?
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Loader type="line-scale" active />
    </>
  );
}
