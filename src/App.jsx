import "./App.css";

function App() {
  return (
    <>
      <h1>Xijie Yang | Researcher Homepage</h1>

      {/* WIP a brief introduction */}

      <h2>About</h2>

      <p>
        <strong>Xijie Yang | 杨希杰</strong>
      </p>

      <h3>
        <strong>(2023 - 2028 expected)</strong>
      </h3>
      <p>
        <strong>Ph.D. Candidate</strong> at{" "}
        <a
          href="http://www.en.cs.zju.edu.cn"
          title="浙江大学 计算机科学与技术学院"
        >
          College of Computer Science and Technology, Zhejiang University
        </a>{" "}
        <small>(ZJU)</small> and{" "}
        <a
          href="https://www.shlab.org.cn"
          title="上海人工智能实验室 物理智能中心"
        >
          Physical AI Center, Shanghai Artificial Intelligence Laboratory
        </a>{" "}
        <small>(SH AI Lab)</small>
      </p>
      <p>
        <strong>Research Interests:</strong> Embodied AI, Human-Computer
        Interaction, 3D Representation, 3D Reconstruction, Differentiable
        Rendering
      </p>
      <p>
        <strong>Supervisors:</strong>{" "}
        <a href="https://datascience.hku.hk/people/bo-dai/" title="戴勃">
          Prof. Bo Dai
        </a>
        ,{" "}
        <a href="https://www.ie.cuhk.edu.hk/faculty/lin-dahua/" title="林达华">
          Prof. Dahua Lin
        </a>
      </p>
      <p>
        <strong>Mentors:</strong>{" "}
        <a href="https://eveneveno.github.io/lnxu/" title="徐霖宁">
          Dr. Linning Xu
        </a>
        ,{" "}
        <a href="https://mulinyu.github.io" title="于沐霖">
          Dr. Mulin Yu
        </a>
        ,{" "}
        <a href="https://inspirelt.github.io/" title="鲁涛">
          Dr. Tao Lu
        </a>
      </p>

      <h3>
        <strong>(2019 - 2023)</strong>
      </h3>
      <p>
        <strong>B.S.</strong> at{" "}
        <a href="https://www.ee.tsinghua.edu.cn/en/" title="清华大学电子工程系">
          Department of Electronic Engineering, Tsinghua University
        </a>{" "}
        <small>(THU)</small>
      </p>

      <h2>Publications</h2>

      {/* WIP add authors, teaser, abs / brief intro */}
      <p>
        <strong>EAG-PT (SIGGRAPH 2026):</strong>{" "}
        <a href="https://eag-pt.github.io">Project Page</a>,{" "}
        <a href="https://arxiv.org/abs/2601.23065">Paper</a>,{" "}
        {/* <a href="https://doi.org/10.1145/3799902.3811054">
          [WIP] Paper (Publisher)
        </a>
        ,  */}
        <a href="https://github.com/InternRobotics/EAG-PT">Code</a>
      </p>
      <p className="paper-intro">
        EAG-PT reconstructs indoor scenes with 2D Gaussians for editable diffuse
        global illumination. By separating emissive and non-emissive components
        and combining efficient reconstruction with path tracing, it enables
        more natural, physically consistent scene editing than radiance-field
        methods, while avoiding the geometry limitations of mesh-based inverse
        rendering.
      </p>
      <img
        className="publication-image"
        src="/EAG-PT.jpg"
        alt="EAG-PT paper teaser"
      />
      <p>
        <strong>V3DG (SIGGRAPH 2025):</strong>{" "}
        <a href="https://xijie-yang.github.io/V3DG/">Project Page</a>,{" "}
        <a href="https://arxiv.org/abs/2505.06523">Paper (arXiv)</a>,{" "}
        <a href="https://doi.org/10.1145/3721238.3730602">Paper (Publisher)</a>,{" "}
        <a href="https://github.com/city-super/V3DG">Code</a>
      </p>
      <p className="paper-intro">
        V3DG achieves real-time rendering of massive 3D Gaussians in large
        composed scenes through a novel LOD approach. Inspired by Nanite in
        Unreal Engine 5, V3DG processes detailed 3D assets into clusters at
        various granularities offline, and selectively renders 3D Gaussians at
        runtime - flexibly balancing rendering speed and visual fidelity based
        on user-defined tolerances.
      </p>
      <img
        className="publication-image"
        src="/V3DG.jpg"
        alt="V3DG paper teaser"
      />

      <h2>Contact</h2>

      <p>
        <strong>Personal Email:</strong>{" "}
        <a href="mailto:564197835@qq.com">564197835@qq.com</a>
      </p>
      <p>
        <strong>Affliation Emails:</strong>{" "}
        <a href="mailto:yangxijie@pjlab.org.cn">yangxijie@pjlab.org.cn</a>,{" "}
        <a href="mailto:yangxijie@zju.edu.cn">yangxijie@zju.edu.cn</a>
      </p>
      <p>
        <strong>WeChat:</strong> y564197835
      </p>

      <h2>Links</h2>

      <p>
        <strong>Research:</strong>{" "}
        <a href="https://orcid.org/0009-0009-3076-2595">ORCID</a>,{" "}
        <a href="https://scholar.google.com/citations?user=dP5NZVgAAAAJ">
          Google Scholar
        </a>
        , <a href="https://github.com/Yang-Xijie">GitHub/Yang-Xijie</a>,{" "}
        <a href="https://github.com/Xijie-Yang">GitHub/Xijie-Yang</a>,{" "}
        <a href="https://xijie-yang.github.io/SDG/">SDG Publications</a>
      </p>

      <p>
        <strong>Life:</strong>{" "}
        <a href="https://www.xiaohongshu.com/user/profile/61be0cc10000000021024369">
          RedNote
        </a>{" "}
        <small>(Chinese Social Media)</small>,{" "}
        <a href="https://space.bilibili.com/24502827">Bilibili</a>{" "}
        <small>(Chinese Video Platform)</small>,{" "}
        <a href="https://yang-xijie.github.io/">Personal Homepage</a>{" "}
        <small>(Chinese)</small>
      </p>

      <h2>Miscellaneous</h2>

      <p>
        <strong>Tech Stack:</strong> Programming:{" "}
        <a href="https://www.python.org">Python</a>,{" "}
        <a href="https://pytorch.org">PyTorch</a>,{" "}
        <a href="https://developer.nvidia.com/cuda">CUDA</a>,{" "}
        <a href="https://developer.apple.com/metal/">Metal</a>; App dev:{" "}
        <a href="https://developer.apple.com/swift/">Swift</a>,{" "}
        <a href="https://developer.apple.com/swiftui/">SwiftUI</a>; Web dev:{" "}
        <a href="https://react.dev">React</a>; Tools:{" "}
        <a href="https://www.sketch.com">Sketch</a>,{" "}
        <a href="https://www.apple.com/in/keynote/">Keynote</a>,{" "}
        <a href="https://www.apple.com/final-cut-pro/">FCP</a>
      </p>

      <p>
        <strong>Interesting Projects:</strong>{" "}
        <a href="https://space.bilibili.com/24502827/lists/139476">
          C++ on macOS Tutorial
        </a>
        , <a href="https://thu-mobile-dev.github.io/book/">Flutter Tutorial</a>,{" "}
        <a href="https://github.com/Racoon-Book/Racoon-Account-Book">
          RacoonAccountBook
        </a>{" "}
        <small>
          (Second Prize in 2021 Mobile Application Innovation Contest)
        </small>
        , <a href="https://www.bilibili.com/video/BV1Jd4y1g7eX/">Audioc</a>{" "}
        <small>
          (Second Prize in 2022 Mobile Application Innovation Contest)
        </small>
        , <a href="https://github.com/Ex-Studio/ExSticky">ExSticky</a>
      </p>

      <p>
        <strong>Honors:</strong> Honor for Graduates – Excellence in Academic
        Innovation <small>(2025, ZJU)</small>, Outstanding Graduate Leader Award{" "}
        <small>(2024, ZJU)</small>, Award of Honor for Graduate{" "}
        <small>(2024, ZJU)</small>, Outstanding Scholarship for Scientific and
        Technological Innovation <small>(2021, THU)</small>, Outstanding Award
        for Social Practice <small>(2020, THU)</small>
      </p>

      <p>
        <strong>Reviewer:</strong> SIGGRAPH Asia <small>x2</small>, ECCV{" "}
        <small>x2</small>, IET Computer Vision <small>x1</small>
      </p>

      <p>
        <strong>Languages:</strong> native Chinese, fluent English, beginner
        Japanese
      </p>

      <p>
        <strong>Interests:</strong>{" "}
        <a href="https://developer.apple.com/macos/">macOS</a>,{" "}
        <a href="https://yang-xijie.github.io/2/Anime/anime-rating-extraordinary/">
          Anime
        </a>
        , <a href="https://midiplus.com/html/Xpro%20II.html">Keyboard</a>
      </p>
    </>
  );
}

export default App;
