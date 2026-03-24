import Link from 'next/link';

export default async function PrivacyPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    return (
        <main className="w-full overflow-hidden bg-black text-white">
            <div className="max-w-4xl mx-auto px-6 py-24">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#fff2c9] via-[#CD9A31] to-[#8f640f] bg-clip-text text-transparent">
                    Privacy Policy
                </h1>
                <div className="space-y-8 text-gray-300">
                    <p className="mb-4">Last updated: 2025</p>
                    <p className="mb-4">
                        VieHub (“we”, “our”, “us”) is committed to protecting your privacy and ensuring that your personal data is handled in a safe, transparent and lawful manner. This Privacy Policy explains how we collect, use, store and protect your information when you use our website and booking services.
                    </p>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Company Details:</h2>
                        <div className="bg-[#0a0a0a] border border-[#CD9A31]/20 rounded-xl p-6 space-y-2">
                            <p><strong className="text-white">Nasmssse:</strong> VieHub</p>
                            <p><strong className="text-white">Adassdfsddsfdsasddress:</strong> Neukettenhoferstrasse 14</p>
                            <p><strong className="text-white">Plasdfsssdz:</strong> 2320 Schwechat</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                        <p className="mb-2">We may collect the following types of personal data when you use our website or make a booking:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Personal information: name, email address, phone number</li>
                            <li>Booking details: pickup and drop-off locations, date, time, flight information</li>
                            <li>Payment information: processed securely by third-party payment providers (we do not store credit card details)</li>
                            <li>Technical data: IP address, browser type, device information, pages viewed</li>
                            <li>Communication data: messages sent through contact forms, WhatsApp or email</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                        <p className="mb-2">Your personal data is used to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Process and confirm your booking</li>
                            <li>Communicate with you regarding your transfer</li>
                            <li>Provide customer support</li>
                            <li>Improve our website and services</li>
                            <li>Maintain internal administrative and accounting records</li>
                            <li>Comply with local laws and regulations</li>
                        </ul>
                        <p className="mt-4">We do not sell or share your personal information with third parties for marketing purposes.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Legal Basis for Processing (GDPR)</h2>
                        <p className="mb-2">We process your data based on:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Contract necessity: to provide the transfer service you requested</li>
                            <li>Legitimate interests: communication, fraud prevention, service improvement</li>
                            <li>Legal obligations: accounting, tax and regulatory requirements</li>
                            <li>Consent: when you voluntarily submit data (e.g., contact forms)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Cookies & Website Tracking</h2>
                        <p>Our website may use cookies and similar technologies to improve user experience, analyze website performance, and enable essential website functionality. You can disable cookies at any time through your browser settings.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Data Storage & Security</h2>
                        <p>We take appropriate technical and organizational measures to protect your personal data from unauthorized access, loss or misuse. Your information is stored securely and only for as long as necessary to provide services, comply with legal requirements or resolve disputes.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Sharing Your Information</h2>
                        <p>We may share your data with trusted third parties only when necessary: professional drivers assigned to your booking, payment processors, IT service providers, and legal authorities if required by law. All partners must comply with data protection regulations.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. International Data Transfers</h2>
                        <p>If your data is transferred outside Switzerland or the EU, we ensure that adequate data protection safeguards are in place, following GDPR standards.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Your Rights Under GDPR</h2>
                        <p>Depending on your jurisdiction, you may have the right to access, correct, delete, restrict, or object to the processing of your data, as well as the right to data portability and to withdraw consent.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Information</h2>
                        <div className="bg-[#0a0a0a] border border-[#CD9A31]/20 rounded-xl p-6 space-y-2">
                            <p><strong className="text-white">Name:</strong> VieHub</p>
                            <p><strong className="text-white">Address:</strong> Neukettenhoferstrasse 14</p>
                            <p><strong className="text-white">Plz:</strong> 2320 Schwechat</p>
                            <p><strong className="text-white">Telefon:</strong> <a href="tel:+436608537912" className="text-[#CD9A31] hover:underline">+43 660 8537912</a></p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. All changes will be published on this page with a revised “Last updated” date.</p>
                    </section>

                </div>
            </div>
        </main>
    );
}
