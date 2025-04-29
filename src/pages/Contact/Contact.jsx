import React from "react";
import ClientMessageBox from "./ClientMessageBox";
import MyInformation from "./MyInformation";
import FollowMe from "./FollowMe";
function Contact() {
  return (
    <section id="contact" className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your
            ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* message box */}
          <ClientMessageBox />
          <div className="space-y-8 flex flex-col">
            {/* contact information starts */}
            <MyInformation />

            {/*Follow Me part */}
            <FollowMe />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
