import AboutMe from "./_components/AboutMe";
import CodePrinciples from "./_components/CodePrinciples";
import ContactMe from "./_components/Contact";
import FeaturedWork from "./_components/FeaturedWork";
import Intro from "./_components/Intro";
import MyExpertise from "./_components/MyExpertise";
import NavBar from "./_components/Navbar";
import ThankYou from "./_components/ThankYou";
import WorkExperience from "./_components/WorkExperience";

export default function Index() {

    return (
        <div className="h-screen overflow-y-auto hide-scrollbar background-img bg-black text-white">
            <NavBar />

            <main className="relative">
                <Intro />

                <AboutMe />

                <WorkExperience />

                <MyExpertise />

                <FeaturedWork />

                <CodePrinciples />

                <ContactMe />

                <ThankYou />

                <footer className="mt-10 text-center text-xs text-neutral-400">
					© 2025 — Design by <a href="https://gamma.app" className="text-blue-400 hover:underline">Gamma</a>, Developed by <a href="https://ajaychowdary.com" className="text-blue-400 hover:underline">Ajay Chowdary</a>
				</footer>
            </main>
        </div>
    );
}


