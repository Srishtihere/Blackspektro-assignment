import React from "react";
import SectionHeader from "../components/global/SectionHeader";
import navlogo from "../assets/logo.png";
import FeaturedCard from "../components/FeaturedCard";
import services from "../assets/services";

export default function Home() {
  return (
    <div>
      {/* Hero Section  */}
      <section className="card w-100 mb-4">
        <div className="card-body text-center">
          <img src={navlogo} width={300} alt="Ashray Logo" />
          <h1 className="display-2 mb-2">Welcome to X</h1>
          <p className="text-muted">
            X Technologies is a leading provider of innovative IT solutions and
            services. Established in 2010, we specialize in developing custom
            software, providing IT consulting services, and delivering
            cutting-edge technology solutions to businesses worldwide.
          </p>
          <h3>Explore. Support. Transform.</h3>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-4">
        <SectionHeader title="Services Offered here !" />
        <ol className="list-group list-group-numbered">
          {services.map((item) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-start"
              key={item.name}
            >
              <div className="ms-2 me-auto">
                <div>
                  <strong>{item.name}</strong>:{item.description}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-4">
        <SectionHeader title="Featured Sections" />
        <div className="d-flex flex-wrap">
          <FeaturedCard
            id={1}
            href="/"
            title="About"
            description="Display the home page of X"
          />
          <FeaturedCard
            id={2}
            href="/EmployeeList"
            title="EmployeeList"
            description="Display list of Employees"
          />
          <FeaturedCard
            id={3}
            href="/MyProfile"
            title="Organization Details"
            description="Display Organization details"
          />
          <FeaturedCard
            id={4}
            href="/editProfile"
            title="Edit Organization"
            description="Edit Organization details"
          />
        </div>
      </section>
    </div>
  );
}
