const WorkExperience = () => {
    return (
        <section id="experience" className="max-w-screen-2xl w-full mx-auto backdrop-blur-lg saturate-100 py-10 px-6 md:py-14 md:px-16 xl:px-32 space-y-8 text-2xl">
            <h2 className="text-xl font-medium">Work Experience</h2>
            <p className="font-medium text-4xl">My Professional Journey</p>
            <p>
                Here's a detailed overview of my professional experience, showcasing my growth and contributions in the software development field. My roles have consistently involved transforming complex requirements into robust and user-friendly web applications.
            </p>

            <div className="grid grid-cols-1 gap-x-8">
                <div className="md:flex gap-x-8">
                    <div className="bg-[#C32C2F] hidden font-semibold py-4 min-w-24 md:flex items-center justify-center" style={{ clipPath: 'polygon(0 0, 50% 10%, 100% 0, 100% 90%, 50% 100%, 0 90%)' }}>1</div>
                    <div className="md:hidden border-b-4 border-[#C32C2F] text-center pb-2 mb-3">1</div>
                    <div className="mb-8">
                        <h3 className="font-medium">Senior Frontend Developer</h3>
                        <p className="mt-1 text-[#bdbbbb] text-base">Techmash Solutions Pvt. Ltd, Apr 2024 - Present</p>
                        <div className="space-y-2 text-left my-4">
                            <div>
                                Leading frontend architecture and feature development for scalable enterprise-grade applications using React, TypeScript, and Tailwind CSS.
                            </div>
                            <div>
                                Collaborated with design, backend, and DevOps teams to build performant and accessible UI components.
                            </div>
                            <div>
                                Introduced component-based design system and improved frontend deployment workflows using CI/CD pipelines.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:flex gap-x-8">
                    <div className="bg-[#C32C2F] hidden font-semibold py-4 min-w-24 md:flex items-center justify-center" style={{ clipPath: 'polygon(0 0, 50% 10%, 100% 0, 100% 90%, 50% 100%, 0 90%)' }}>2</div>
                    <div className="md:hidden border-b-4 border-[#C32C2F] text-center pb-2 mb-3">2</div>
                    <div className="mb-8">
                        <h3 className="font-medium">Software Engineer II</h3>
                        <p className="mt-1 text-[#bdbbbb] text-base">Practo Technologies Pvt. Ltd, Aug 2021 - Mar 2024</p>
                        <ul className="space-y-2 text-left my-4">
                            <li>
                                <p>
                                    Contributed to patient and doctor-facing products with responsive and performant React applications.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Migrated legacy Angular codebase to modern React with Redux and Context API.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Optimized app load times by implementing lazy loading, code splitting, and service worker caching strategies.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:flex gap-x-8">
                    <div className="md:bg-[#C32C2F] hidden font-semibold py-4 min-w-24 md:flex items-center justify-center" style={{ clipPath: 'polygon(0 0, 50% 10%, 100% 0, 100% 90%, 50% 100%, 0 90%)' }}>3</div>
                    <div className="md:hidden border-b-4 border-[#C32C2F] text-center pb-2 mb-3">3</div>
                    <div>
                        <h3 className="font-medium">Software Engineer Intern</h3>
                        <p className="mt-1 text-[#bdbbbb] text-base">Practo Technologies Pvt. Ltd, Feb 2021 - July 2021</p>
                        <ul className="space-y-2 text-left my-4">
                            <li>
                                <p>
                                    Assisted in developing frontend features for internal tools using React and REST APIs.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Participated in agile development cycles, including sprint planning, demos, and bug fixing.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Gained experience in writing unit tests with Jest and maintaining code quality through peer reviews.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
