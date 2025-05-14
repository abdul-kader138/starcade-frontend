import Lang from "~/lang/lang";

export default function ContactSection() {
  return (
    <section className="text-white ml-14 mr-9 px-10 py-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: What We Do */}
        <div
          className="relative rounded-3xl overflow-hidden min-h-[550px] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/contact-section/contact_us.png')",
          }}
        >
          <div className="absolute inset-0 bg-[#162C4DCC] bg-opacity-40 z-0 flex flex-col justify-between items-center text-center px-4 py-8">
            {/* Top */}
            <h3 className="text-md uppercase font-semibold underline">
              {Lang.what_we_do}
            </h3>

            {/* Middle */}
            <div className="max-w-2xl">
              <p className="text-xl sm:text-3xl font-semibold leading-snug mb-10">
                {Lang.what_we_do_details}
              </p>
              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
                {Lang.contact_us}
              </button>
            </div>

            {/* Bottom */}
            <p className="text-xs text-white opacity-80">
              {Lang.contact_us_content}
            </p>
          </div>
        </div>

        {/* Card 2: Join the Community */}
        <div
          className="relative rounded-3xl overflow-hidden min-h-[550px] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/contact-section/join_us.png')",
          }}
        >
          <div className="absolute inset-0 bg-[#162C4DCC] bg-opacity-40 z-0 flex flex-col justify-between items-center text-center px-4 py-8">
            {/* Top */}
            <h3 className="text-md uppercase font-semibold underline">
              {Lang.join_community}
            </h3>

            {/* Middle */}
            <div className="max-w-2xl">
              <p className="text-xl sm:text-3xl font-semibold leading-snug mb-10">
                {Lang.join_community_content}
              </p>
              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
                {Lang.open_discord}
              </button>
            </div>

            {/* Bottom */}
            <p className="text-xs text-white opacity-80">
              {Lang.open_discord_content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
