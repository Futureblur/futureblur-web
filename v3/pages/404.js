import Button from "../components/Button";
import Footer from "../components/Footer";
import Head from "next/head";

const emotes = [
	"(⩾﹏⩽)", "(>_<)", "(=_=)", "(-_-)", "(°◇°)", "(._.)"
]

export default function NotFound() {
	const random = emotes[emotes.length * Math.random() | 0];

	return (
		<>
			<Head>
				<title>404 // Page not found</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
				<meta name="description" content="The page you are looking for was not found. Error code: 404"/>
			</Head>

			<div className={ "wrapper" }>
				<h1>{ random }</h1>
				<h2>We traveled to the moon and beyond, but we could not find the page you are looking for...</h2>
				<div className={ "buttonWrapper" }>
					<Button text={ "Bring me back to Earth 🌍" } link={ "https://futureblur.com" }/>
				</div>

				<style jsx>{ `
                  .wrapper {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-bottom: 240px;
                  }

                  h1 {
                    margin: 200px auto auto auto;
                    font-size: clamp(2rem, 24vw, 14rem);
                    max-font-size: 14rem;
                    font-family: Syne, var(--font-family);

                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-image: var(--color-gradient);
                    text-align: center;
                    overflow: hidden;
                    color: var(--color-dark-gray);
                  }

                  h2 {
                    padding: var(--base-padding);
                    margin: 50px auto auto auto;
                    text-align: center;
                    font-weight: 500;
                    color: var(--color-fg);
                    font-size: 20px;
                  }

                  .buttonWrapper {
                    display: flex;
                    justify-content: center;
                    margin: 40px auto auto auto;
                    padding: var(--base-padding);
                    width: 100%;
                    max-width: 400px;
                  }

				` }</style>
			</div>
			<Footer/>
		</>
	)
}
