import Link from 'next/link';

export default async function TermsOfServicePage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    return (
        <main className="w-full overflow-hidden bg-black text-white">
            <div className="max-w-4xl mx-auto px-6 py-24">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#fff2c9] via-[#CD9A31] to-[#8f640f] bg-clip-text text-transparent">
                    Terms of Service
                </h1>
                <div className="space-y-8 text-gray-300">

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Scope</h2>
                        <p>These General Terms and Conditions govern all passenger transport and transfer services provided by VieHub (hereinafter referred to as the “Contractor”) within Austria and to neighboring countries. Any terms and conditions of the customer (hereinafter referred to as the “Client”) that deviate from these General Terms and Conditions shall not apply. By placing an order, the Client acknowledges and agrees to these General Terms and Conditions. A contract is concluded only upon confirmation of the booking by the Contractor.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Information Covered by the Privacy Policy</h2>
                        <p>This Privacy Policy applies to personal data that we collect, use and process in connection with our services. By booking a service with us, you agree that your personal data will be processed in accordance with this Privacy Policy.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Data Protection</h2>
                        <p>The Contractor is committed to protecting the Client’s personal data in accordance with applicable data protection laws, including the GDPR. Personal data is used solely for the purpose of processing bookings, providing services and improving service quality.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Booking and Taxi / Transfer Services – User Information</h2>
                        <p>When using our Services or making a booking, we may collect information including Name, email, telephone, billing/payment info, pickup/destination details, and technical/usage data (IP address, browser type, etc.).</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Payment and Prices</h2>
                        <p>Payment must be made immediately after the service directly in the vehicle via cash (EUR) or common credit/debit cards. All stated prices are fixed, gross amounts including statutory VAT.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Cancellation</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Up to 24 hours before departure: 50% of the total price</li>
                            <li>Up to 12 hours before departure: 80% of the total price</li>
                            <li>Less than 12 hours before departure: 100% of the total price</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. Waiting Time</h2>
                        <p>Waiting time may be charged at €10 per hour. For airport pickups, 30 minutes of waiting time after scheduled arrival is included.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Payment Terms</h2>
                        <p>Invoices are payable immediately unless otherwise agreed. A payment period of 14 days applies. In the event of late payment, default interest of 5% above the base rate will be charged.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">9. Obligations and Liability of the Contractor</h2>
                        <p>Liability exists only in cases of intent, gross negligence or breach of essential contractual obligations. The Contractor is not liable for delays caused by traffic, weather, road closures, accidents or force majeure.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">10. Duties and Liability of the Client</h2>
                        <p>The Client must comply with laws; smoking is prohibited. Damage caused by the Client or transported items is the Client’s responsibility.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">11. Information Obligations of the Client</h2>
                        <p>The Client must provide accurate and complete information (passenger details, timing, location). Incorrect information releases the Contractor from liability.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">12. Jurisdiction and Severability</h2>
                        <p>Austrian law applies exclusively. Place of jurisdiction is Vienna, Austria. If any provision is invalid, the remainder remains unaffected.</p>
                    </section>

                </div>
            </div>
        </main>
    );
}
