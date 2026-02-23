#!/usr/bin/env python3
import re

# Read the file
with open('lib/i18n/destinations-translations.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Define steps for each destination and language
steps_map = {
    'es': {
        'transfer-vienna-airport-to-prague': '["Reserve su traslado a Praga", "Confirmamos su hora de recogida", "Disfrute de un viaje cómodo a Praga"]',
        'transfer-vienna-airport-to-linz': '["Reserve su traslado a Linz", "Confirmamos su hora de recogida", "Disfrute de un viaje cómodo a Linz"]',
        'transfer-vienna-airport-to-bratislava': '["Reserve su traslado a Bratislava", "Confirmamos su hora de recogida", "Disfrute de un viaje cómodo a Bratislava"]',
        'taxi-from-vienna-airport-to-budapest': '["Reserve su traslado a Budapest", "Confirmamos su hora de recogida", "Disfrute de un viaje cómodo a Budapest"]',
        'transfer-from-vienna-airport-to-parndorf': '["Reserve su traslado a Parndorf", "Confirmamos su hora de recogida", "Disfrute de una compra sin estrés"]',
        'taxi-from-vienna-airport-to-salzburg': '["Reserve su traslado a Salzburgo", "Confirmamos su hora de recogida", "Disfrute de un viaje cómodo a Salzburgo"]',
    },
    'en': {
        'transfer-vienna-airport-to-prague': '["Book your Prague transfer", "We confirm your pickup time", "Enjoy a smooth journey to Prague"]',
        'transfer-vienna-airport-to-linz': '["Book your Linz transfer", "We confirm your pickup time", "Enjoy a smooth journey to Linz"]',
        'transfer-vienna-airport-to-bratislava': '["Book your Bratislava transfer", "We confirm your pickup time", "Enjoy a smooth journey to Bratislava"]',
        'taxi-from-vienna-airport-to-budapest': '["Book your Budapest transfer", "We confirm your pickup time", "Enjoy a smooth journey to Budapest"]',
        'transfer-from-vienna-airport-to-parndorf': '["Book your Parndorf transfer", "We confirm your pickup time", "Enjoy a smooth shopping trip"]',
        'taxi-from-vienna-airport-to-salzburg': '["Book your Salzburg transfer", "We confirm your pickup time", "Enjoy a smooth journey to Salzburg"]',
    },
    'fr': {
        'transfer-vienna-airport-to-prague': '["Réservez votre transfert à Prague", "Nous confirmons votre heure de retrait", "Profitez d\'un voyage fluide vers Prague"]',
        'transfer-vienna-airport-to-linz': '["Réservez votre transfert à Linz", "Nous confirmons votre heure de retrait", "Profitez d\'un voyage fluide vers Linz"]',
        'transfer-vienna-airport-to-bratislava': '["Réservez votre transfert à Bratislava", "Nous confirmons votre heure de retrait", "Profitez d\'un voyage fluide vers Bratislava"]',
        'taxi-from-vienna-airport-to-budapest': '["Réservez votre transfert à Budapest", "Nous confirmons votre heure de retrait", "Profitez d\'un voyage fluide vers Budapest"]',
        'transfer-from-vienna-airport-to-parndorf': '["Réservez votre transfert à Parndorf", "Nous confirmons votre heure de retrait", "Profitez d\'une expérience de shopping sans stress"]',
        'taxi-from-vienna-airport-to-salzburg': '["Réservez votre transfert à Salzburg", "Nous confirmons votre heure de retrait", "Profitez d\'un voyage fluide vers Salzburg"]',
    },
    'it': {
        'transfer-vienna-airport-to-prague': '["Prenotate il vostro trasferimento a Praga", "Confermiamo l\'ora del ritiro", "Godetevi un viaggio fluido verso Praga"]',
        'transfer-vienna-airport-to-linz': '["Prenotate il vostro trasferimento a Linz", "Confermiamo l\'ora del ritiro", "Godetevi un viaggio fluido verso Linz"]',
        'transfer-vienna-airport-to-bratislava': '["Prenotate il vostro trasferimento a Bratislava", "Confermiamo l\'ora del ritiro", "Godetevi un viaggio fluido verso Bratislava"]',
        'taxi-from-vienna-airport-to-budapest': '["Prenotate il vostro trasferimento a Budapest", "Confermiamo l\'ora del ritiro", "Godetevi un viaggio fluido verso Budapest"]',
        'transfer-from-vienna-airport-to-parndorf': '["Prenotate il vostro trasferimento a Parndorf", "Confermiamo l\'ora del ritiro", "Godetevi un\'esperienza di shopping senza stress"]',
        'taxi-from-vienna-airport-to-salzburg': '["Prenotate il vostro trasferimento a Salisburgo", "Confermiamo l\'ora del ritiro", "Godetevi un viaggio fluido verso Salisburgo"]',
    },
    'de': {
        'transfer-vienna-airport-to-prague': '["Buchen Sie Ihren Transfer nach Prag", "Wir bestätigen Ihre Abholzeit", "Genießen Sie eine reibungslose Fahrt nach Prag"]',
        'transfer-vienna-airport-to-linz': '["Buchen Sie Ihren Transfer nach Linz", "Wir bestätigen Ihre Abholzeit", "Genießen Sie eine reibungslose Fahrt nach Linz"]',
        'transfer-vienna-airport-to-bratislava': '["Buchen Sie Ihren Transfer nach Bratislava", "Wir bestätigen Ihre Abholzeit", "Genießen Sie eine reibungslose Fahrt nach Bratislava"]',
        'taxi-from-vienna-airport-to-budapest': '["Buchen Sie Ihren Transfer nach Budapest", "Wir bestätigen Ihre Abholzeit", "Genießen Sie eine reibungslose Fahrt nach Budapest"]',
        'transfer-from-vienna-airport-to-parndorf': '["Buchen Sie Ihren Transfer nach Parndorf", "Wir bestätigen Ihre Abholzeit", "Genießen Sie ein stressfreies Einkaufserlebnis"]',
        'taxi-from-vienna-airport-to-salzburg': '["Buchen Sie Ihren Transfer nach Salzburg", "Wir bestätigen Ihre Abholzeit", "Genießen Sie eine reibungslose Fahrt nach Salzburg"]',
    }
}

# Function to add steps to a destination block
def add_steps_to_block(content, dest_slug, lang, steps):
    # Pattern to find the destination block ending with `}` or `},`
    pattern = rf'("{dest_slug}":\s*{{[^}}]*?longDesc:\s*`[^`]*?`)\s*(}},?)'
    
    def replace_func(match):
        return match.group(1) + f',\n      steps: {steps}\n    {match.group(2)}'
    
    return re.sub(pattern, replace_func, content, flags=re.DOTALL)

# Apply all replacements
for lang in steps_map:
    for dest_slug, steps in steps_map[lang].items():
        old_pattern = rf'("{dest_slug}":\s*{{[^}}]*?longDesc:\s*`[^`]*?`)\s*(}},?)'
        # Find the destination block and add steps
        matches = re.finditer(old_pattern, content, re.DOTALL)
        match_list = list(matches)
        
        if match_list:
            # Process from last to first to avoid offset issues
            for match in reversed(match_list):
                full_block = match.group(0)
                # Check if steps already exists
                if 'steps:' not in full_block:
                    start = match.start()
                    end = match.end()
                    # Insert steps before the closing }
                    new_block = full_block.replace(match.group(2), f',\n      steps: {steps}\n    {match.group(2)}')
                    content = content[:start] + new_block + content[end:]

# Write the updated content
with open('lib/i18n/destinations-translations.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Steps added successfully!")
