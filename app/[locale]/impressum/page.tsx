import { getDictionarySync, SupportedLocale } from "@/lib/i18n/dictionaries"

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = getDictionarySync((locale as SupportedLocale) || "en")
  const i = dict.impressum as Record<string, string>

  return (
    <main className="w-full overflow-hidden bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">

        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#fff2c9] via-[#CD9A31] to-[#8f640f] bg-clip-text text-transparent">
          {i.page_title}
        </h1>

        <div className="space-y-8 text-gray-300">

          {/* CONTACT INFO */}
          <section>
            <p className="mb-4">
              {i.legal_notice}
            </p>

            <div className="bg-[#0a0a0a] border border-[#CD9A31]/20 rounded-xl p-6 space-y-2">
              <p><strong className="text-white">{i.name_label}:</strong> VIEhub</p>
              <p>
                <strong className="text-white">{i.phone_label}:</strong>{" "}
                <a href="tel:+436608537912" className="text-[#CD9A31] hover:underline">+43 660 8537912</a>
              </p>
              <p>
                <strong className="text-white">{i.email_label}:</strong>{" "}
                <a href="mailto:viehub.at@gmail.com" className="text-[#CD9A31] hover:underline">viehub.at@gmail.com</a>
              </p>
              <p>
                <strong className="text-white">{i.internet_label}:</strong>{" "}
                <a href="https://www.viehub.com" className="text-[#CD9A31] hover:underline">www.viehub.com</a>
              </p>
            </div>
          </section>

          {/* AUTHORITY */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">{i.authority_title}</h2>
            <p>{i.authority_value}</p>
          </section>

          {/* PROFESSION */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">{i.profession_title}</h2>
            <p>{i.profession_value}</p>
            <p className="mt-2"><strong className="text-white">{i.granting_state_label}:</strong> {i.granting_state_value}</p>
            <p className="mt-2">
              <strong className="text-white">{i.legal_rules_label}:</strong> {i.legal_rules_value}:{" "}
              <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="text-[#CD9A31] hover:underline">
                www.ris.bka.gv.at
              </a>
            </p>
          </section>

          {/* NUMBERS */}
          <section>
            <div className="bg-[#0a0a0a] border border-[#CD9A31]/20 rounded-xl p-6 space-y-2">
              <p><strong className="text-white">UID-Nr.:</strong> 66473728</p>
              <p><strong className="text-white">GISA-Zahl:</strong> 14738074</p>
              <p><strong className="text-white">GLN:</strong> 9110006092044</p>
            </div>
          </section>

          {/* MEDIA LAW */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">{i.media_law_title}</h2>
            <h3 className="text-xl font-semibold text-white mb-3">{i.media_owner_title}:</h3>
            <div className="bg-[#0a0a0a] border border-[#CD9A31]/20 rounded-xl p-6 space-y-2">
              <p><strong className="text-white">{i.name_label}:</strong> VIEhub</p>
              <p><strong className="text-white">{i.address_label}:</strong> Neukettenhoferstrasse 14</p>
              <p><strong className="text-white">{i.postal_code_label}:</strong> 2320 Schwechat</p>
            </div>
            <p className="mt-4"><strong className="text-white">{i.business_purpose_label}:</strong> {i.business_purpose_value}</p>
          </section>

          {/* EU DISPUTE */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">{i.eu_dispute_title}</h2>
            <p className="mb-3">
              {i.eu_dispute_text}{" "}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#CD9A31] hover:underline">
                https://ec.europa.eu/consumers/odr/
              </a>{" "}
              {locale === "de" ? "finden." : ""}
            </p>
            <p>{i.eu_dispute_text2}</p>
          </section>

          {/* LIABILITY CONTENT */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">{i.liability_content_title}</h2>
            <p>{i.liability_content_text}</p>
          </section>

          {/* LIABILITY LINKS */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">{i.liability_links_title}</h2>
            <p>{i.liability_links_text}</p>
          </section>

          {/* COPYRIGHT */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">{i.copyright_title}</h2>
            <p>{i.copyright_text}</p>
          </section>

          {/* IMAGE CREDITS */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">{i.image_credits_title}</h2>
            <p className="mb-3">{i.image_credits_text1}</p>
            <p className="mb-3">{i.image_credits_text2}</p>
            <p>
              <strong className="text-white">{i.image_credits_sources_label}:</strong>{" "}
              {i.image_credits_sources_value}
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
