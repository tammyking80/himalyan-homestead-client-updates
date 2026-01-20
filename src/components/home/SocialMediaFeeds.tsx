import { Instagram, Facebook, ExternalLink } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';

const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/himalayanvalleyhomestead/',
  facebook: 'https://www.facebook.com/profile.php?id=61577311416522',
};

function InstagramWidget() {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-stone-100">
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Instagram className="w-6 h-6 text-pink-600" />
          </div>
          <div className="text-white">
            <p className="font-semibold">@himalayanvalleyhomestead</p>
            <p className="text-sm text-white/80">Follow us on Instagram</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="aspect-[4/5] rounded-lg overflow-hidden bg-stone-100 mb-4">
          <iframe
            src="https://www.instagram.com/himalayanvalleyhomestead/embed"
            className="w-full h-full"
            frameBorder="0"
            scrolling="no"
            allowTransparency
            title="Instagram Feed"
            loading="lazy"
          />
        </div>
        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          <Instagram className="w-5 h-5" />
          View Instagram Profile
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

function FacebookWidget() {
  const facebookPageUrl = encodeURIComponent(SOCIAL_LINKS.facebook);

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-stone-100">
      <div className="bg-[#1877F2] p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Facebook className="w-6 h-6 text-[#1877F2]" />
          </div>
          <div className="text-white">
            <p className="font-semibold">Himalayan Valley Homestead</p>
            <p className="text-sm text-white/80">Follow us on Facebook</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="aspect-[4/5] rounded-lg overflow-hidden bg-stone-100 mb-4">
          <iframe
            src={`https://www.facebook.com/plugins/page.php?href=${facebookPageUrl}&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
            className="w-full h-full"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Facebook Feed"
            loading="lazy"
          />
        </div>
        <a
          href={SOCIAL_LINKS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 bg-[#1877F2] text-white font-medium rounded-lg hover:bg-[#166FE5] transition-colors"
        >
          <Facebook className="w-5 h-5" />
          View Facebook Page
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export function SocialMediaFeeds() {
  return (
    <Section bg="cream" padding="lg">
      <SectionHeader
        title="Follow Our Journey"
        subtitle="Stay connected with us on social media for the latest updates, guest experiences, and glimpses of life at the homestead."
      />
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <InstagramWidget />
        <FacebookWidget />
      </div>
    </Section>
  );
}

export function SocialMediaFeedsCompact() {
  const facebookPageUrl = encodeURIComponent(SOCIAL_LINKS.facebook);

  return (
    <Section bg="white" padding="md">
      <div className="text-center mb-8">
        <h2 className="heading-md text-stone-800 mb-3">Connect With Us</h2>
        <p className="text-stone-600">Follow us on social media for updates and inspiration</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-cream-50 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-3 flex items-center gap-3">
            <Instagram className="w-5 h-5 text-white" />
            <span className="text-white font-medium text-sm">@himalayanvalleyhomestead</span>
          </div>
          <div className="aspect-[4/3] bg-stone-100">
            <iframe
              src="https://www.instagram.com/himalayanvalleyhomestead/embed"
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              allowTransparency
              title="Instagram Feed"
              loading="lazy"
            />
          </div>
          <div className="p-3">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-medium rounded-lg text-sm hover:opacity-90 transition-opacity"
            >
              Follow on Instagram
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="bg-cream-50 rounded-xl overflow-hidden">
          <div className="bg-[#1877F2] p-3 flex items-center gap-3">
            <Facebook className="w-5 h-5 text-white" />
            <span className="text-white font-medium text-sm">Himalayan Valley Homestead</span>
          </div>
          <div className="aspect-[4/3] bg-stone-100">
            <iframe
              src={`https://www.facebook.com/plugins/page.php?href=${facebookPageUrl}&tabs=timeline&width=500&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`}
              className="w-full h-full"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Facebook Feed"
              loading="lazy"
            />
          </div>
          <div className="p-3">
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#1877F2] text-white font-medium rounded-lg text-sm hover:bg-[#166FE5] transition-colors"
            >
              Follow on Facebook
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
