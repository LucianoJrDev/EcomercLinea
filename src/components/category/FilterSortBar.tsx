import { useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface FilterSortBarProps {
  onFiltersToggle: () => void;
  filtersOpen: boolean;
  onFiltersClose: () => void;
}

const FilterSortBar = ({ onFiltersToggle, filtersOpen, onFiltersClose }: FilterSortBarProps) => {
  const [sortBy, setSortBy] = useState("featured");

  const categories = ["Earrings", "Bracelets", "Rings", "Necklaces"];
  const priceRanges = ["Under €100", "€100 - €200", "€200 - €300", "Over €300"];
  const materials = ["Gold", "Silver", "Rose Gold", "Platinum"];

  return (
    <>
      <section className="w-full px-6 mb-8 border-b border-border pb-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Sheet open={filtersOpen} onOpenChange={onFiltersClose}>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                size="sm"
                onClick={onFiltersToggle}
                className="gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 bg-background">
              <SheetHeader className="mb-6">
                <div className="flex items-center justify-between">
                  <SheetTitle className="text-lg font-medium">Filters</SheetTitle>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={onFiltersClose}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </SheetHeader>
              
              <div className="space-y-6">
                {/* Category Filter */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Category</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={category} />
                        <Label htmlFor={category} className="text-sm font-light">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Price Filter */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Price</h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <div key={range} className="flex items-center space-x-2">
                        <Checkbox id={range} />
                        <Label htmlFor={range} className="text-sm font-light">
                          {range}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Material Filter */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Material</h3>
                  <div className="space-y-2">
                    {materials.map((material) => (
                      <div key={material} className="flex items-center space-x-2">
                        <Checkbox id={material} />
                        <Label htmlFor={material} className="text-sm font-light">
                          {material}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Clear All
                  </Button>
                  <Button size="sm" className="flex-1">
                    Apply Filters
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <div className="flex items-center gap-2">
            <span className="text-sm font-light text-muted-foreground">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40 border-none bg-transparent text-sm font-light">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
    </>
  );
};

export default FilterSortBar;