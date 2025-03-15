export default function Hero() {
  return (
    <section className="w-full min-h-screen">
      <div className="w-full flex flex-col justify-between">
        <div className="w-full flex flex-col">
          <div className="w-full margin padding-x">
            <div>
              <h1 className="heading pt-10 tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
                services
              </h1>
            </div>
          </div>
          <div className="w-full border-t border-[#21212155]">
            <p className="w-[80%] sm:w-full xm:w-full sub-heading font-normal padding-x font-NeueMontreal text-secondry padding-y">
              At <strong>Pixavia Studio</strong>, we craft&nbsp;
              <span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
                eye-catching&nbsp;
              </span>
              and&nbsp;
              <span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
                eye-opening&nbsp;
              </span>
              visuals that captivate, engage, and leave a lasting impact.
            </p>
          </div>
          <div className="w-full flex border-t border-[#21212155] py-[20px] flex-col">
            <div className="w-full flex justify-between sm:flex-col xm:flex-col padding-x sm:gap-[20px] xm:gap-[20px]">
              <div className="w-[50%] sm:w-full xm:w-full">
                <p className="paragraph font-NeueMontreal text-secondry">
                  At <strong>Pixavia Studio</strong>, we craft impactful designs
                  by following <br /> a simple yet effective approach:
                </p>
              </div>
              <div className="w-[50%] sm:w-full xm:w-full flex justify-between sm:flex-col xm:flex-col gap-[20px]	">
                <div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
                  <div className="flex flex-col gap-[20px]">
                    <p className="paragraph font-NeueMontreal text-secondry underline">
                      Vision shapes creativity
                    </p>
                    <p className="paragraph font-NeueMontreal text-secondry">
                      What’s the big idea?{" "}
                      <br className="sm:hidden xm:hidden" />
                      Understanding the essence of your project{" "}
                      <br className="sm:hidden xm:hidden" />
                      helps us tailor visuals that resonate and{" "}
                      <br className="sm:hidden xm:hidden" />
                      make a lasting impact.
                    </p>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <p className="paragraph font-NeueMontreal text-secondry underline">
                      Audience drives engagement
                    </p>
                    <p className="paragraph font-NeueMontreal text-secondry">
                      Who is your design for? What story does{" "}
                      <br className="sm:hidden xm:hidden" />
                      it tell? Knowing your audience ensures{" "}
                      <br className="sm:hidden xm:hidden" />
                      that every pixel connects, captivates, and{" "}
                      <br className="sm:hidden xm:hidden" />
                      delivers value.
                    </p>
                  </div>
                </div>
                <div className="w-[50%] sm:w-full xm:w-full">
                  <div className="flex flex-col gap-[20px]">
                    <p className="paragraph font-NeueMontreal text-secondry underline">
                      Context defines execution
                    </p>
                    <p className="paragraph font-NeueMontreal text-secondry">
                      Where does your design live? Online, print,{" "}
                      <br className="sm:hidden xm:hidden" />
                      or on stage? In branding, marketing, or{" "}
                      <br className="sm:hidden xm:hidden" />
                      presentations? We align design{" "}
                      <br className="sm:hidden xm:hidden" />
                      with context to ensure maximum impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
