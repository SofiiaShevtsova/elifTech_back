const express = require("express");
const { getProducts} = require("../../models/products/productsOperations")
// const {
//   registerUsresSchema,
//   loginSchema,
//   updatePasswordSchema,
//   refreshTokenSchema,
// } = require("../../models/users/userSchema");

// const authenticate = require("../../middlewares/authMiddlewar");

const router = express.Router();

// router.post("/register", async (req, res, next) => {
//   try {
//     const {
//       nickName,
//       password,
//       userName,
//       subscription,
//       birthdayDate,
//       healthGroup,
//       schoolClass,
//       subjects,
//       contacts,
//       parents,
//     } = req.body;

//     const infoForRegister = { nickName, password, userName, subscription };
//     const infoForStudents = {
//       userName,
//       birthdayDate,
//       healthGroup,
//       schoolClass,
//       contacts,
//       parents,
//     };
//     const infoForAdmin = {
//       userName,
//       birthdayDate,
//       healthGroup,
//       schoolClass,
//       contacts,
//       subjects,
//     };

//     const { error } = registerUsresSchema.validate(infoForRegister);
//     if (error) {
//       res.status(400).json({ message: `${error}` });
//     } else {
//       const newUser = await registerUser({ ...infoForRegister });

//       if (newUser) {
//         switch (subscription) {
//           case "student":
//             const userParents = await registerUser({
//               nickName: `${nickName}P`,
//               password: password,
//               userName: newUser._id,
//               subscription: "parent",
//             });
//             const { error: errorStudent } = registerStudentsSchema.validate({
//               ...infoForStudents,
//               owner: newUser._id,
//             });
//             if (errorStudent) {
//               res.status(400).json({ message: `${errorStudent}` });
//             } else {
//               const student = await registerStudents({
//                 ...infoForStudents,
//                 owner: newUser._id,
//               });
//             }
//             break;
//           case "teacher":
//             const { error: errorTeacher } = registerAdminSchema.validate({
//               ...infoForAdmin,
//               owner: newUser._id,
//             });
//             if (errorTeacher) {
//               res.status(400).json({ message: `${errorTeacher}` });
//             } else {
//               const teacher = await registerAdmin({
//                 ...infoForAdmin,
//                 owner: newUser._id,
//               });
//             }
//             break;
//           case "admin":
//             const { error } = registerAdminSchema.validate({
//               ...infoForAdmin,
//               owner: newUser._id,
//             });
//             if (error) {
//               res.status(400).json({ message: `${errorAdmin}` });
//             } else {
//               const admin = await registerAdmin({
//                 ...infoForAdmin,
//                 owner: newUser._id,
//               });
//             }
//             break;

//           default:
//             break;
//         }
//       }

//       res.status(201).json({
//         id: newUser._id,
//       });
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// router.post("/login", async (req, res, next) => {
//   try {
//     const { error } = loginSchema.validate(req.body);
//     if (error) {
//       res.status(400).json({ message: `${error}` });
//     } else {
//       const user = await loginUser(req);
//       res.json(user);
//     }
//   } catch (error) {
//     next(error);
//   }
// });
// ------------don't finished yet-----------------------------------------

router.get("/", (req, res, next) => {
    try {
    const {id}=req.body
    const listOfProducts = getProducts(id);
    res.json(listOfProducts);
  } catch (error) {
    next(error);
  }
});
// ------------------------------------------------------------------------

// router.post("/refresh", async (req, res, next) => {
//   try {
//     const { error } = refreshTokenSchema.validate(req.body);
//     if (error) {
//       res.status(400).json({ message: `${error}` });
//     } else {
//       const user = await refreshUser(req);
//       res.json(user);
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// router.post("/logout", authenticate, async (req, res, next) => {
//   try {
//     const responce = await logoutUser(req);
//     if (responce === "Not found") {
//       res.status(404).json({ message: responce });
//     } else {
//       res.status(204).json({ message: "Logout" });
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// router.patch("/password", authenticate, async (req, res, next) => {
//   try {
//     const { error } = updatePasswordSchema.validate(req.body);
//     if (error) {
//       res.status(400).json({ message: "Bad password." });
//     } else {
//       const responce = await updatePassword(req, res);
//       res.json(responce);
//     }
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
