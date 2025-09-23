const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-16 px-6">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-light mb-4">Linea</h3>
            <p className="text-sm font-light text-white/70 leading-relaxed">
              Minimalist jewelry crafted for the modern individual
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-light mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">New In</a></li>
              <li><a href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">Rings</a></li>
              <li><a href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">Earrings</a></li>
              <li><a href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">Bracelets</a></li>
              <li><a href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">Necklaces</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-light mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-light mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">Pinterest</a></li>
              <li><a href="#" className="text-sm font-light text-white/70 hover:text-white transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm font-light text-white/50 mb-4 md:mb-0">
              © 2024 Linea. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm font-light text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm font-light text-white/50 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;